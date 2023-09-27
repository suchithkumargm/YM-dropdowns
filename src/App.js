import React from 'react';

import Dropdown1 from './components/Dropdown1/Dropdown1.js';
import Dropdown2 from './components/Dropdown2/Dropdown2.js';
import Dropdown3 from './components/Dropdown3/Dropdown3.js';
import Dropdown4 from './components/Dropdown4/Dropdown4.js';
import './App.css';

const App = () => {
	return (
		<>
			<main className='main'>
				<Dropdown1 />
				<Dropdown2 />
				<Dropdown3 />
				<Dropdown4 />
			</main>
		</>
	);
};

export default App;