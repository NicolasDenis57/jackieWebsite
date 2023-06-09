import React from 'react';
import  './Header.module.css';
import DropDownMenu from '../UI/Menu/DropDownMenu';

const Header = () => {
  return (
    <nav>
      <DropDownMenu />
    </nav>
  );
};

export default Header;