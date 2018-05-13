import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import About from './about';
import Download from './download';
import Home from './home';
import NavBar from './nav-bar';
import Wiki from './wiki';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <NavBar />
            <div className="container">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/download" component={Download} />
                <Route path="/wiki/:stage" component={Wiki} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
