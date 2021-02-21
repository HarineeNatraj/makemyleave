import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login/Login'
import Loader from './components/Loader/Loader'

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact>
      <Loader />
    </Route>
    <Route path="/login" exact>
      <Login />
    </Route>
      </Switch>
      </Router>
  );
}

export default App;
