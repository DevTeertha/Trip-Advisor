import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from './Components/Search/Search';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
