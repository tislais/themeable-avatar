import React from 'react';
import PropTypes from 'prop-types';

const Character = () => {
 <h1>Character</h1>
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
