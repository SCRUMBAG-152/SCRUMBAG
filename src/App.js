import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from "history";
import "./customs/assets/scss/material-dashboard-pro-react.css?v=1.4.0";
import Dash from './components/layout/Dash'
import Pages from './components/layout/Pages'



const history = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/pages" name= "Pages" component={Pages}/>
            <Route path='/' component={Dash} name= "Home"/>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;