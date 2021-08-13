import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchAvatarCharacters, fetchFuturamaCharacters } from '../services/characterApis';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [selectedApi, setSelectedApi] = useState('futurama');

  const apiMap = {
    airbender: fetchAvatarCharacters,
    futurama: fetchFuturamaCharacters
  }

  useEffect(() => {
    apiMap[selectedApi]().then(setCharacters);
  }, [selectedApi]);

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

export const useSetSelectedApi = () => {
  const { setSelectedApi } = useContext(CharacterContext);
  return setSelectedApi;
};
