import { ModalImg } from 'components/modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemImage,
  ImageGalleryItemList,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    selectedImg: null,
  };

  setSelectedImg = () => {
    this.setState({ selectedImg: this.props.largeImageURL });
  };

  closeModal = () => {
    this.setState({ selectedImg: null });
  };

  render() {
    const { selectedImg } = this.state;
    const { largeImageURL, tags, webformatURL } = this.props;
    return (
      <ImageGalleryItemList class="gallery-item">
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.setSelectedImg}
        />
        <ModalImg
          isOpen={selectedImg !== null}
          onClose={this.closeModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      </ImageGalleryItemList>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
