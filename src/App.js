import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Payment from './Components/Payment/Payment';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
