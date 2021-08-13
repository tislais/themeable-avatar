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
      <div class="relative inline-flex">
        <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
        <select class={ 
          selectedTheme === 'light' 
            ? select + lightSelect
            : select + darkSelect
          }>
          <option>Choose API...</option>
          <option>Avatar API</option>
          <option>Open Pinball Database</option>
        </select>
      </div>
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
  shadow-sm
`;

const darkHeader = `
  bg-gray-800
  border-black
`;

const lightHeader = `
  bg-white
`;

const h1 = `
  text-3xl
  filter
  font-light
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

const select = `
  border 
  rounded-full 
  h-10 
  pl-5 
  pr-10 
  bg-white 
  hover:border-gray-400 
  focus:outline-none 
  appearance-none
`;

const lightSelect = `
  bg-white 
  text-gray-600 
  border-gray-300 
`;

const darkSelect = `
  bg-gray-800
  text-gray-300
  border-gray-600 
`;

export default Header;
