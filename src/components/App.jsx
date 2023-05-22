import { Component } from 'react';
import { getImages } from 'servise/Api';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { Button } from './button/Button';
import { FallingLines } from 'react-loader-spinner';
import { Layer, LoaderStyle } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
    isVisible: false,
    error: null,
    images: [],
    total: 0,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.fetchImages(query, page);
    }
  }

  fetchImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const data = await getImages(query, page);
      if (data.hits.length === 0) {
        return alert('Мы ничего не нашли. Сорян!');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        total: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onHandelSubmit = ({ query }) => {
    this.setState({ query, images: [], page: 1 });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, total, isLoading } = this.state;

    const totalPage = total / images.length;

    return (
      <Layer>
        <Searchbar onSubmit={this.onHandelSubmit} />
        {images.length !== 0 && <ImageGallery images={images} />}

        <LoaderStyle>
          {isLoading && images.length === 0 && (
            <FallingLines
              color="#4fa94d"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          )}
        </LoaderStyle>

        {totalPage > 1 && !isLoading && images.length !== 0 && (
          <Button onClick={this.onLoadMore} isLoading={isLoading} />
        )}
      </Layer>
    );
  }
}

//34500293-b03de9e828113a4f3f2acb0b8
