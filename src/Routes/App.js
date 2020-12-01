import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/homePage';
import Test from '../Pages/test/test';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/test' component={Test} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
