import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import MyProvider from './state/State';
import { MyContext } from './state/State';
import FrontPage from './components/wellcome/wellcome'
import Registration from './components/auth/registration';
import Login from './components/auth/login';
import PublicDiary from './components/user/publicdiary';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import UserLayout from './components/user/layout'
import NotFound from './components/user/unauthorized/404';

const theme = createMuiTheme({ typography: { useNextVariants: true } });

class App extends Component {
  static contextType = MyContext;

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MyProvider>

          <Router>



            <FrontPage path="/" />
            <PublicDiary path='/public/:id' />
            <Registration path="/registration" />
            <Login path="/login" />
            <UserLayout path="/user/:id" />
            <NotFound path="*" />
          </Router>
        </MyProvider>
      </ThemeProvider>
    );
  }
}

export default App;