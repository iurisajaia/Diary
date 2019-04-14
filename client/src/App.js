import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Wellcome from './components/wellcome/wellcome'
import MyProvider from './state/State';
import { MyContext } from './state/State';
import Registration from './components/auth/registration';
import Login from './components/auth/login';
import Layout from './components/profile/layout/layout';
import PublicDiary from './components/profile/public/diary';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import UserLayout from './components/user/layout'
const theme = createMuiTheme({ typography: { useNextVariants: true } });

class App extends Component {
  static contextType = MyContext;

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MyProvider>

          <Router>


            <Wellcome path="/" />
            <Layout path="/oldprofile/:id" />
            <PublicDiary path='/diary/:id' />
            <Registration path="/registration" />
            <Login path="/login" />
            <UserLayout path="/profile/:id" />
          </Router>
        </MyProvider>
      </ThemeProvider>
    );
  }
}

export default App;