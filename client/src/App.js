import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Wellcome from './components/wellcome/wellcome'
import Wall from './components/profile/user/wall';
import FriendsWall from './components/profile/friends/friendswall';
import SingleWall from './components/profile/single/singlewall';
import MyProvider from './state/State';
import { MyContext } from './state/State';
import Layout from './components/profile/layout/layout'
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({ typography: { useNextVariants: true } });

class App extends Component {
  static contextType = MyContext;
  // bodyoverflow = () => {
  //   if (window.location.href == "/") {
  //     document.getElementsByTagName('body').style.overflow = 'hidden'
  //   }
  // }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MyProvider>

          <Router>

            <Wall path='/profile' />
            <Wellcome path="/" />
            <FriendsWall path='/friends' />
            <SingleWall path="/diary/:id" />
            <Layout path="/layout" />
          </Router>
        </MyProvider>
      </ThemeProvider>
    );
  }
}

export default App;