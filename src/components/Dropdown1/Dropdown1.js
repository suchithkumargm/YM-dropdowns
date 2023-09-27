import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import './Dropdown1.css';

const Dropdown1 = () => {
  const handleItemClick = (itemName) => {
    console.log(`Selected item: ${itemName}`);
  };

  return (
    <Dropdown onSelect={handleItemClick}>
      <Dropdown.Toggle variant="dark" className='text-yellow bg-black dropdown__title' id="dropdown-basic">
        <span className="text-yellow">Dropdown 1</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className='bg-black'>
        <Dropdown.Item eventKey="Item 1" className='text-yellow'>
          Item 1
        </Dropdown.Item>
        <Dropdown.Item eventKey="Item 2" className='text-yellow'>
          Item 2
        </Dropdown.Item>
        <Dropdown.Item eventKey="Item 3" className='text-yellow'>
          Item 3
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Dropdown1;
