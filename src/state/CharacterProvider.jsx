import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchAvatarCharacters } from '../services/avatarApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('light');

  useEffect(() => {
    fetchAvatarCharacters().then(setCharacters);
  }, []);

  return (
    <CharacterContext.Provider value={{ characters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
}

export const useSetSelectedTheme = () => {
  const { setSelectedTheme } = useContext(CharacterContext);
  return setSelectedTheme;
}
