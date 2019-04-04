import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Wellcome from './components/wellcome/wellcome'
import Wall from './components/profile/wall'
import MyProvider from './state/State'
class App extends Component {
  render() {

    return (
      <MyProvider>


        <Router>
          <Wellcome path="/" />
          <Wall path='/profile' />

        </Router>

      </MyProvider>
    );
  }
}

export default App;
