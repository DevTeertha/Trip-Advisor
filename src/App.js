import './App.css';
import Login from './Components/Login/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Payment from './Components/Payment/Payment';
import Search from './Components/Search/Search';
import BookNow from './Components/BookNow/BookNow';
import Home from './Components/Home/Home';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/dashboard">
          </Route>
          <Route path="/:id">
            <BookNow></BookNow>
          </Route>
        </Switch>
      </Router>
  )
}

export default App;
