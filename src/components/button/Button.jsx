import { ButtonStyle } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return <ButtonStyle onClick={onClick}>Load More</ButtonStyle>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
