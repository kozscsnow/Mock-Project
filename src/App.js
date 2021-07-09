import { Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import About from './components/About';
import AuthRoute from './components/AuthRoute';
import Login from './pages/Login';
import News from './pages/News';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import Register from './pages/Register';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Countries from './pages/Countries';
import CountryDetail from './pages/Countries/components/CountryDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <PrivateRoute path="/news" component={News} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/countries" component={Countries} />
        <PrivateRoute path="/countries/:countriesID" component={CountryDetail} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
