import React from 'react';
import PropTypes from 'prop-types';
import { useSelectedTheme } from '../../state/CharacterProvider';

const Character = ({ name, image }) => {
  const selectedTheme = useSelectedTheme();

  return (
    <figure className={
      selectedTheme === 'light'
        ? figure + lightFigure
        : figure + darkFigure
    }>
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
  transition duration-300 ease-in-out
`;

const lightImg = `
`;

const darkImg = `
  filter
  brightness-75
`;

const figure = `
  flex
  flex-col
  items-center
  gap-4
  border
  p-4
  rounded-lg
  transition duration-300 ease-in-out
`;

const darkFigure = `
  bg-gray-800
  border-opacity-0
`;

const lightFigure = `
  bg-white
  border-gray-200
`;

const caption = `
  w-60
  text-2xl
  font-light
  my-2
  p-2
  text-center
  transition duration-300 ease-in-out
  truncate
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
