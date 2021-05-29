import './App.css';
<<<<<<< HEAD
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext()

=======
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from './Components/Search/Search';
import BookNow from './Components/BookNow/BookNow';
>>>>>>> Trial

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
<<<<<<< HEAD
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
<Router>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/dashboard">
   
        </Route>
      </Switch>
      </Router>

     
    </UserContext.Provider>
=======
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/:id">
            <BookNow></BookNow>
          </Route>
        </Switch>
      </Router>
>>>>>>> Trial
  );
}

export default App;
