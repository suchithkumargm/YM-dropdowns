import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; // Import the package's CSS for styling

import './Dropdown4.css';

const Dropdown4 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    'Item 1',
    'Item 2',
    'Item 3',
    // Add more options as needed
  ];

  // Handle dropdown selection
  const handleDropdownChange = (selected) => {
    setSelectedOption(selected.value);
    console.log(`Selected item: ${selected.value}`); // Log the selected value
  };

  return (
    <div>
      <Dropdown
        options={options}
        onChange={handleDropdownChange}
        value={selectedOption}
        placeholder="Dropdown 4"
        className='dropdown4'
      />
    </div>
  );
};

export default Dropdown4;
