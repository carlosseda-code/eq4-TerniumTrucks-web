import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateProfile from './pages/CreateProfile';
import EditProfile from './pages/EditProfile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/createprofile" component={CreateProfile}/>
        <Route path="/editprofile" component={EditProfile}/>
        <Route component={CreateProfile}/>
      </Switch>
    </Router>
  );
}

export default App;
