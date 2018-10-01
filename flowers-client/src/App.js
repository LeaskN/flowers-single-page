import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import LandingPage from './components/LandingPage'
import NotFound from './components/NotFound';
import People from './containers/People';
import ViewPerson from './containers/ViewPerson';
import CreatePerson from './containers/CreatePerson';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="container">
          <Switch>
              <Route exact path ="/" component={LandingPage} />
              <Route exact path ="/people" component={People} />
              <Route exact path ="/create/person" component={CreatePerson} />
              <Route path ="/people/:id" component={ViewPerson} />
              <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;