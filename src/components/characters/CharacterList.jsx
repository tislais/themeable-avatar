import React from 'react';
import { useCharacters, useSelectedTheme } from '../../state/CharacterProvider';
import Character from './Character';

const CharacterList = () => {
  const characters = useCharacters();
  const selectedTheme = useSelectedTheme();

  const characterElements = characters.map((character) => (
    <li key={character.name}>
      <Character {...character} />
    </li>
  ));

  return (
    <div>
      <p>Theme: {selectedTheme}</p>
      <ul>{characterElements}</ul>
    </div>
  )
};

export default CharacterList;
