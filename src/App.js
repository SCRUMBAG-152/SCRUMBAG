import React, { Component } from 'react';
import { Switch, Route, Router, withRouter } from 'react-router-dom'
import { createBrowserHistory } from "history";
import "./customs/assets/scss/material-dashboard-pro-react.css?v=1.4.0";
/* import ProjectDetails from './components/projects/ProjectDetails' */
import Dash from './components/layout/Dash'
import Pages from './components/layout/Pages'


const history = createBrowserHistory();

class App extends Component {
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

{/* <Route exact path='/dashboard'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} /> */}



export default App;