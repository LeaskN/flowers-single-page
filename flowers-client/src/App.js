import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootswatch/dist/journal/bootstrap.css'


import Header from './components/Header'
import LandingPage from './components/LandingPage'
import People from './containers/People';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="container">
          <Switch>
              <Route exact path ="/" component={LandingPage} />
              <Route exact path ="/people" component={People} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;