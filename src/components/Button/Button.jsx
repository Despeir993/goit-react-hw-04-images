import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

const Button = ({ onClick, buttonText }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      {buttonText}
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
