import React from 'react';
import { useSelectedTheme, useSetSelectedTheme } from '../../state/CharacterProvider';

const Header = () => {
  const setSelectedTheme = useSetSelectedTheme();
  const selectedTheme = useSelectedTheme();

  const handleChange = ({ target }) => setSelectedTheme(target.value);

  return (
    <>
      <h1>Avatar Characters</h1>
      <label>
        <input type="radio" name="theme" value="light" onChange={handleChange} />
        Light
      </label>
      <label> 
        <input type="radio" name="theme" value="dark" onChange={handleChange} />
        Dark
      </label>
      <p>Theme: {selectedTheme}</p>
    </>
  )
};

export default Header;
