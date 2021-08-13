import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchAvatarCharacters } from '../services/avatarApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('light');

  useEffect(() => {
    fetchAvatarCharacters().then(setCharacters).then(setSelectedTheme);
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, setSelectedTheme, selectedTheme }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useSelectedTheme = () => {
  const { selectedTheme } = useContext(CharacterContext);
  return selectedTheme;
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

export const useSetSelectedTheme = () => {
  const { setSelectedTheme } = useContext(CharacterContext);
  return setSelectedTheme;
};
