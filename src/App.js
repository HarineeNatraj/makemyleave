import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login/Login'
import Loader from './components/Loader/Loader'
import Model from './components/Login/model';

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/forgot-password/:gender" component={Model} exact>
    </Route>
    <Route path="/login" component={Login} exact></Route>
    <Route path="/" exact>
      <Loader />
    </Route>
      </Switch>
      </Router>
  );
}

export default App;
