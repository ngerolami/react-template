
import React from 'react';
import ReactDOM from 'react-dom';
import Preloader from './components/Preloader';
const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Preloader />
    {/* Your app content here */}
  </React.StrictMode>,
  rootElement
);