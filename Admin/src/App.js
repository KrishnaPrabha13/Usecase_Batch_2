import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login';
import Home from './Component/Home';
import Logout from './Component/Logout';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Kyc from './Component/Kyc';
import Loan from './Component/Loan';
function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
    
          <Switch>
            {<Route exact path = "/" component={Login}/>}
            <Route exact path = "/home" component={Home}/> 
            <Route exact path = "/formkyc/users" component={Kyc}/> 
            <Route exact path = "/goldreq/users" component={Loan}/> 
            <Route exact path ="/logout"component={Logout}/>
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
