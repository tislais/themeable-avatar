import React from 'react';

const Header = () => {
  return (
    <>
      <h1>Avatar Characters</h1>
      <label>
        <input type="radio" name="theme" value="light" />
        Light
      </label>
      <label>
        <input type="radio" name="theme" value="dark" />
        Dark
      </label>
    </>
  )
};

export default Header;
