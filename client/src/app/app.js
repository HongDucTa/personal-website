import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';


import Home from '../scenes/Home';
import CV from '../scenes/CV';
import Projets from '../scenes/Projets';
import Formations from '../scenes/Formations';
import CompoundInterestSimulator from '../scenes/CompoundInterestSimulator'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  }
})

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/cv' component={CV} />
        <Route exact path='/projets' component={Projets} />
        <Route exact path='/formations' component={Formations} />
        <Route exact path='/outils/interets-composes' component={CompoundInterestSimulator} />
      </Switch>
    </div>
  );
}
