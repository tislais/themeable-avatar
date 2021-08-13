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
    <header className={ 
      selectedTheme === 'light' 
        ? header + lightHeader
        : header + darkHeader
      }>
      <h1 className={ 
        selectedTheme === 'light' 
          ? h1 + lightH1
          : h1 + darkH1
        }>Avatar Characters</h1>
      <div className="flex items-center justify-center">
        <label className="flex items-center cursor-pointer flex-col">
          <div className="relative flex items-center">
            <input type="checkbox" onChange={handleChange} className="sr-only" />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            <div className={selectedTheme === 'light' ? label + lightLabel : label + darkLabel}>Dark Mode</div>
          </div>
        </label>
      </div>
    </header>
  )
};

const header = `
  to-pink-300 
  py-4
  px-8
  flex
  justify-between
  border-b-4
  border-black
  border-opacity-20
  gap-4
  shadow-md
`;

const darkHeader = `
  bg-gray-700
  border-white
`;

const lightHeader = `
  bg-white
`;

const h1 = `
  text-xl
  filter
  font-bold
  drop-shadow-sm
  tracking-wider
`;

const darkH1 = `text-gray-300`;
const lightH1 = `text-gray-700`

const label = `
  ml-3 
  text-sm
  font-semibold
`;

const lightLabel = 'text-gray-700';
const darkLabel = 'text-gray-300';

export default Header;
