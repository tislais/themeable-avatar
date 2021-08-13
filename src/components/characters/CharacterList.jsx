import React from 'react';
import { useCharacters, useSelectedTheme } from '../../state/CharacterProvider';
import Character from './Character';

const CharacterList = () => {
  const characters = useCharacters();
  const selectedTheme = useSelectedTheme();

  const characterElements = characters.map((character) => (
    <li key={character.name} 
      className={
        selectedTheme === 'light'
          ? li + lightLi
          : li + darkLi
      }>
      <Character {...character} />
    </li>
  ));

  return (
    <div 
      className={selectedTheme === 'light' 
        ? wrap + lightWrap
        : wrap + darkWrap
      }>
      <ul className={ul}>{characterElements}</ul>
    </div>
  )
};

const wrap = `
  transition duration-300 ease-in-out
  pb-12
`;

const darkWrap = `
  bg-gray-900
`;

const lightWrap = `
  bg-gray-100
`;

const ul = `
  max-w-screen-2xl
  mx-auto
  pt-8
  flex
  flex-row
  justify-evenly
  gap-8
  flex-wrap
  justify-start
`;

const li = `
  p-4
  rounded-xl
  shadow
  transform
  transition duration-300 ease-in-out
  hover:scale-105
`;

const lightLi = `
  bg-white
  bg-opacity-50
`;

const darkLi = `
  bg-gray-800
  bg-opacity-50
`;


export default CharacterList;
