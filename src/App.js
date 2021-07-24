import { Route, Switch } from 'react-router-dom';
import './App.scss';
import AuthRoute from './HOCs/AuthRoute';
import PrivateRoute from './HOCs/PrivateRoute';
import Dashboard from './pages/Dashboard';
import DetailInfoCovidCountry from './pages/DetailInfoCovidCountry';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme } from '@material-ui/core/styles';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const LightTheme = {
  pageBackground: 'white',
  titleColor: '#dc658b',
  linkColor: '#164c7e',
  iconColor: '#164c7e',
};

const DarkTheme = {
  pageBackground: '#164c7e',
  backgroundColor: '#164c7e',
  titleColor: 'lightpink',
  textColor: '#fff',
  linkColor: '#b7e3fa',
  iconColor: '#b7e3fa',
  buttonColor: '#b7e3fa',
  backgroundLogoColor: '#164c7e',
  inputColor: '#fff',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.backgroundColor};
`;
function App() {
  const theme = useSelector((state) => state.GlobalReducer.theme);
  // render
  return (
    <ThemeProvider theme={themes[theme]}>
      <Wrapper className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <AuthRoute path="/login" component={Login} />
          <AuthRoute path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route
            path="/countries/:countryName"
            component={DetailInfoCovidCountry}
          />
          <Route path="/test/:hello" component={NotFound} />

          <Route component={NotFound} />
        </Switch>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
