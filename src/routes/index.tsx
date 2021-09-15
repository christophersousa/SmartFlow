import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Home} from '../page/Home'
import { NewsView } from '../page/NewsView';
import { News } from '../page/News';
import { About } from '../page/About';
import { Team } from '../page/Team';



export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/News" exact component={News} />
    <Route path="/ViewNews" exact component={NewsView} />
    <Route path="/About" exact component={About} />
    <Route path="/Team" exact component={Team} />
  </Switch>
);

