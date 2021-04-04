import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddEvent from './Components/AddEvent/AddEvent';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvent">Add Event</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/addEvent">
          <AddEvent></AddEvent>
        </Route>
        <Route path="/dashboard">
          
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
