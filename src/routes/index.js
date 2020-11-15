/* eslint-disable */
import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import App from '../App';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
