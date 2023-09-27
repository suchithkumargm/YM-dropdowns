import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom'

import App from './App.js';
import './index.css';
import './utils.css';

const root = createRoot(document.getElementById('root')); // Create a root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);