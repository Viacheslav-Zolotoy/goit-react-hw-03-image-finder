import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import { Gallery } from './ImageGallery.styled';
export function ImageGallery({ response, onClick }) {
  return (
    <Gallery>
      {response.map(resp => (
        <ImageGalleryItem key={resp.id} {...resp} onClick={onClick} />
      ))}
    </Gallery>
  );
}
ImageGallery.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
