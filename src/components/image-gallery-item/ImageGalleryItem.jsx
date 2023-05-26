import { ModalImg } from 'components/modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemImage,
  ImageGalleryItemList,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ largeImageURL, tags, webformatURL }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = () => {
    setSelectedImg(largeImageURL);
  };
  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <ImageGalleryItemList>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={openModal}
      />

      <ModalImg
        isOpen={selectedImg !== null}
        onClose={closeModal}
        largeImageURL={largeImageURL}
        tags={tags}
      />
    </ImageGalleryItemList>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
