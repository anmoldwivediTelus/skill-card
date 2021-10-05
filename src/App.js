import logo from './logo.svg';
import './App.css';
import { Table,Button } from 'reactstrap';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserProfile from './components/userProfile/UserProfile';
import UserList from './components/userList/UserList';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/user-profile" component={UserProfile}/>
        <Route path="/" component={UserList}/>
      </Switch>
    </div>
  );
}

export default App;
