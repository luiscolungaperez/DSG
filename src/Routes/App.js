import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Header from '../Components/Header/Header';
//Use this mode to import 
import HomePage from 'pages/homePage';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ HomePage } />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
