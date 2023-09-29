import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import dropdownIcon from '../../icons/dropdown.svg';
import './Dropdown1.css';

const Dropdown1 = ({ title, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to log the clicked link to the console
  const logClickedLink = (destination) => {
    console.log('Link clicked:', destination);
  };

  return (
    <div className="dropdown bg-black text-yellow" onClick={toggleDropdown}>
      <span>
        {title} <img src={dropdownIcon} alt='dropdown icon'/>
      </span>
      {isDropdownOpen && (
        <div className='dropdown-content'>
          {items.map((item, index) => (
            <Link key={index} to={item.link} onClick={() => logClickedLink(item.link)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown1;
