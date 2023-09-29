import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import Dropdown1 from './components/Dropdown1/Dropdown1.js';
import './App.css';

const App = () => {
	const dropdown1Items = [
		{ label: 'Item 1', link: '/item1' },
		{ label: 'Item 2', link: '/item2' },
		{ label: 'Item 3', link: '/item3' },
	  ];
	return (
		<BrowserRouter>
			<main className='main'>
				<Dropdown1 title="Dropdown 1" items={dropdown1Items}/>
			</main>
		</BrowserRouter>
	);
};

export default App;