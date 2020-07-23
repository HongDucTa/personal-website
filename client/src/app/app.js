import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';
import Home from '../scenes/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CV from '../scenes/CV';
import Experiences from '../scenes/Experiences';
import Projets from '../scenes/Projets';
import Formations from '../scenes/Formations';
import CompoundInterestSimulator from '../scenes/CompoundInterestSimulator'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cv' component={CV} />
          <Route exact path='/experiences' component={Experiences} />
          <Route exact path='/projets' component={Projets} />
          <Route exact path='/formations' component={Formations} />
          <Route exact path='/outils/interets-composes' component={CompoundInterestSimulator} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
