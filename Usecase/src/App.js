import './App.css';
import React,{useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Component/LoginPage';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import Loan from './Component/Loan';
import Gold from './Component/Gold';
import Formkyc from './Component/Formkyc';
import Logout from './Component/Logout';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Goldreq from './Component/Goldreq';


//import Kycreg from './Component/Kycreg';



 function App() { 
  return (
    <BrowserRouter>
    <div className="App"> 
          <Switch>
            {<Route exact path = "/" component={LoginPage}/>}
            <Route exact path = "/home" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path = "/loan" component={Loan}/>
            <Route exact path = "/formkyc" component={Formkyc}/>
            <Route exact path = "/gold" component={Gold}/>
            <Route exact path="/goldreq" component={Goldreq}/>
            <Route exact path ="/logout"component={Logout}/>
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
