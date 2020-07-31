import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route, Switch} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage}/>
        </Switch>
      </div>
      
      
      );
  }
}

export default App;
