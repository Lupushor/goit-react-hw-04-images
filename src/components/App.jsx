import { useEffect, useState } from 'react';
import { getImages } from 'servise/Api';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { Button } from './button/Button';
import { FallingLines } from 'react-loader-spinner';
import { Layer, LoaderStyle } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchImages = async (query, page) => {
    try {
      setIsLoading(true);
      const data = await getImages(query, page);
      if (data.hits.length === 0) {
        return alert('Мы ничего не нашли. Сорян!');
      }
      setImages(prevImages => [...prevImages, ...data.hits]);
      setTotal(data.totalHits);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const handelSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const totalPage = total / images.length;

  return (
    <Layer>
      <Searchbar onSubmit={handelSubmit} />
      {images.length !== 0 && <ImageGallery images={images} />}

      {error && <div>Error: {error.message}</div>}

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
        <Button onClick={onLoadMore} isLoading={isLoading} />
      )}
    </Layer>
  );
};

//34500293-b03de9e828113a4f3f2acb0b8
