import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AuthRoute from './components/AuthRoute';
import LoginPage from './pages/LoginPage';
import NewsPage from './pages/NewsPage';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Countries from './pages/Countries';
import CountryDetail from './pages/Countries/components/CountryDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute path="/login" component={LoginPage} />
        <AuthRoute path="/register" component={RegisterPage} />
        <PrivateRoute path="/news" component={NewsPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/countries" component={Countries} />
        <PrivateRoute path="/countries/:countriesID" component={CountryDetail} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
