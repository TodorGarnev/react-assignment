import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Weather from './components/Weather/Weather'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Weather />
    </React.Fragment>
  );
}

export default App;
