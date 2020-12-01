/* eslint-disable */
import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import App from '../App';
import Product from '../modules/Product';
import Chart from '../components/Chart';
import Test01 from '../modules/Test01';
import Test02 from '../modules/Test02';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/products' component={Product} />
        <Route exact path='/chart' component={Chart} />
        <Route exact path='/test01' component={Test01} />
        <Route exact path='/test02' component={Test02} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
