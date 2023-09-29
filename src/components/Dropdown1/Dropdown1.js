import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import dropdownIcon from '../../icons/dropdown.svg';
import './Dropdown1.css';

const Sidebar = () => {
	const [isProjectTaskOpen, setIsProjectTaskOpen] = useState(false);

	const toggleProjectTaskDropdown = () => {
		setIsProjectTaskOpen(!isProjectTaskOpen);
	};

	// Function to log the clicked link to the console
	const logClickedLink = (destination) => {
		console.log('Link clicked :', destination);
	};

	return (
		<div className="dropdown bg-black text-yellow" onClick={toggleProjectTaskDropdown}>
			<span>
				Dropdown <img src={dropdownIcon} alt='dropdown icon'/>
			</span>
			{isProjectTaskOpen && (
				<div className='dropdown-content'>
					<Link to='#' onClick={() => logClickedLink('/item 1')}>Item 1</Link>
					<Link to='#' onClick={() => logClickedLink('/item 2')}>Item 2</Link>
					<Link to='#' onClick={() => logClickedLink('/item 3')}>Item 3</Link>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
