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

function App() {
  // render
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
