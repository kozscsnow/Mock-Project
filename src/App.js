import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
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
import { dark, light } from './themes';
const themes = {
  dark: dark,
  light: light,
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.backgroundColor};
`;
const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColor};
  }
`;
function App() {
  const theme = useSelector((state) => state.GlobalReducer.theme);
  // render
  return (
    <ThemeProvider theme={themes[theme]}>
      {/* <GlobalStyle /> */}
      <Wrapper className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <AuthRoute path="/login" component={Login} />
          <AuthRoute path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
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
