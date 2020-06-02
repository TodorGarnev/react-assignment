import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import Brackets from './components/Brackets/Brackets';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/brackets" component={Brackets} />
        <Route path="/weather" component={Weather} />
        <Redirect to="/brackets" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
