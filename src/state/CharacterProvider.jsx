import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchAvatarCharacters, fetchFuturamaCharacters, fetchHeyArnoldCharacters, fetchRickAndMortyCharacters } from '../services/characterApis';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [selectedApi, setSelectedApi] = useState('futurama');

  const apiMap = {
    avatar: fetchAvatarCharacters,
    futurama: fetchFuturamaCharacters,
    heyArnold: fetchHeyArnoldCharacters,
    rickAndMorty: fetchRickAndMortyCharacters
  }

  useEffect(() => {
    console.log(selectedApi);
    apiMap[selectedApi]().then(setCharacters);
  }, [selectedApi]);

  return (
    <CharacterContext.Provider value={{ 
      characters, 
      setSelectedTheme, 
      selectedTheme,
      setSelectedApi,
      apiMap
    }}>
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

export const useAvailableApis = () => {
  const { apiMap } = useContext(CharacterContext);
  console.log(apiMap);
  return Object.keys(apiMap);
};
