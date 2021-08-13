import React from 'react';
import { useSelectedTheme, useSetSelectedTheme } from '../../state/CharacterProvider';

const Header = () => {
  const setSelectedTheme = useSetSelectedTheme();
  const selectedTheme = useSelectedTheme();

  const handleChange = ({ target }) => {
    if(target.checked) {
      setSelectedTheme('dark');
    } else setSelectedTheme('light');
    console.log(selectedTheme)
  };

  return (
    <header className={header}>
      <h1 className={h1}>Avatar Characters</h1>

      <label>
        <div className="relative">
          <input type="checkbox" onChange={handleChange}></input>
        </div>
      </label>

      <p>Dark Mode: {selectedTheme}</p>
    </header>
  )
};

const header = `
  col-span-12 
  bg-gradient-to-r 
  from-blue-400 
  via-yellow-100
  to-pink-300 
  p-4
  flex
  border-b-4
  border-black
  border-opacity-10
  gap-4
`;

const h1 = `
  text-2xl
  font-light
  text-white
`;

export default Header;
