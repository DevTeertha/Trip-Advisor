import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
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
  );
}

export default App;
