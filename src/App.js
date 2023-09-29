import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import Dropdown1 from './components/Dropdown1/Dropdown1.js';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<main className='main'>
				<Dropdown1 />
			</main>
		</BrowserRouter>
	);
};

export default App;