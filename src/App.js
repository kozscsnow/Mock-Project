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
import Alert from './pages/Alert';
import { dark, light } from './themes';
import Analytics from 'pages/Analytics';
import About from 'components/About';
import Contact from 'pages/Contact';
const themes = {
  dark: dark,
  light: light,
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColor};
    transition: 0.3s;
  }
`;
function App() {
  const theme = useSelector((state) => state.GlobalReducer.theme);
  // render
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <AuthRoute path="/login" component={Login} />
          <AuthRoute path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/alert" component={Alert} />
          <PrivateRoute path="/analytics" component={Analytics} />
          <Route
            path="/countries/:countryName"
            component={DetailInfoCovidCountry}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
