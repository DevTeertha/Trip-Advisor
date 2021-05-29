import './App.css';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';

import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from './Components/Search/Search';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
{/* <Router>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/dashboard">
   
        </Route>
      </Switch>
      </Router> */}

     
  
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
      </UserContext.Provider>
  );
}

export default App;
