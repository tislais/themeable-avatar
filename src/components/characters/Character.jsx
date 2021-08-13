import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => {
  return (
    <figure>
      <img src={image} alt={name} className={img} />
      <figcaption>{name}</figcaption>
    </figure>
  )
};

const img = `
  w-24
  h-24
  rounded-full
`;

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
