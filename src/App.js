import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AuthRoute from './components/AuthRoute';
import LoginPage from './pages/LoginPage';
import NewsPage from './pages/NewsPage';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={NewsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
