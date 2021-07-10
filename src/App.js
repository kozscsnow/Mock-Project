import { Route, Switch } from 'react-router-dom';
import './App.scss';
import AuthRoute from './components/AuthRoute';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import DetailInfoCountry from './pages/DetailInfoCountry';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <PrivateRoute path="/news" component={News} />
        <Route path="/dashboard" component={Dashboard} />
        <PrivateRoute
          path="/countries/:countryID"
          component={DetailInfoCountry}
        />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
