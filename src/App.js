import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import {Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
        </Switch>
      </div>
      
      
      );
  }
}

export default App;
