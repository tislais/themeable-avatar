import React from 'react';
import PropTypes from 'prop-types';
import { useSelectedTheme } from '../../state/CharacterProvider';

const Character = ({ name, image }) => {
  const selectedTheme = useSelectedTheme();

  return (
    <figure className={figure}>
      <img src={image} alt={name} className={
        selectedTheme === 'light'
          ? img + lightImg
          : img + darkImg
      } />
      <figcaption className={
        selectedTheme === 'light'
          ? caption + lightCaption
          : caption + darkCaption
      }>{name}</figcaption>
    </figure>
  )
};

const img = `
  w-60
  h-48
  rounded-lg
  object-cover

`;

const lightImg = `
  border-gray-200
`;

const darkImg = `
  border-gray700
`;

const figure = `
  flex
  flex-col
  items-center
  gap-4
  border
  border-gray-200
  bg-white
  p-4
  rounded-lg
`;

const caption = `
  text-2xl
  font-light
  w-full
  my-2
  p-2
  text-center
`;

const lightCaption = `
  text-gray-600
`;

const darkCaption = `
  text-gray-200
`;

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
