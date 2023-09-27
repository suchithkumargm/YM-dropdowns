import React, { useState } from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import dropdownIcon from '../../icons/dropdown.svg';
import './Dropdown2.css';

export default function Example() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuItemClick = (event) => {
    const clickedItem = event.value;
    setSelectedItem(clickedItem);
    console.log(`Selected item: ${clickedItem}`);
  };

  return (
    <div>
      <Menu menuButton={<MenuButton className='bg-black text-yellow dropdown__title'>Dropdown 2<img src={dropdownIcon} alt="Dropdown Icon" /></MenuButton>} transition>
        <MenuItem className='dropdown__item' value="Item 1" onClick={handleMenuItemClick}>Item 1</MenuItem>
        <MenuItem className='dropdown__item' value="Item 2" onClick={handleMenuItemClick}>Item 2</MenuItem>
        <MenuItem className='dropdown__item' value="Item 3" onClick={handleMenuItemClick}>Item 3</MenuItem>
      </Menu>
    </div>
  );
}
