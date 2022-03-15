import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Students from './Students';
import Register from './Register';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Students}></Route>
        <Route path="/register" exact component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}