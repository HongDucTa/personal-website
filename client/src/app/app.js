import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';
import Home from '../scenes/Home';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    );
  }
}
