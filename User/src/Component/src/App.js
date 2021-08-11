import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import Loan from './Component/Loan';
import Gold from './Component/Gold';
import Formkyc from './Component/Formkyc';
import Logout from './Component/Logout';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Goldreq from './Component/Goldreq';
import KycView from './Component/KycView';
import LoginPage from './Component/LoginPage';

//import Kycreg from './Component/Kycreg';



 function App() { 
  return (
    <BrowserRouter>
    <div className="App">
          <Switch>
            {<Route exact path = "/login/add" component={LoginPage}/>}
            <Route exact path = "/home" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path = "/kycview" component={KycView}/>
            <Route exact path = "/formkyc/add" component={Formkyc}/>
            <Route exact path = "/loan" component={Loan}/>
            <Route exact path = "/gold" component={Gold}/>
            <Route exact path="/goldreq/add" component={Goldreq}/>
            <Route exact path ="/logout"component={Logout}/>
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
