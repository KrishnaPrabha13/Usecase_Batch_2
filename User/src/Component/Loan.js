import React from 'react';
import NavBar from './NavBar';
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";


function Loan() {
    const history =useHistory();
    return (
        <div className="loancat">
            <NavBar/>
            <h1></h1>
            <br></br>
            <h2>Loan Category</h2>
            <div className="row">
                <div className="column">
                    <h2>Gold Loan</h2>
                    <Link to = "gold" className= "btn btn-primary">Gold</Link> {'   '}
                </div>
                <div className="column">
                    <h2>Property Loan</h2>
                    <Link to = "property" className= "btn btn-primary">Property</Link>{'  '}
                </div>            
                <div className="column">
                    <h2>AutoMobile Loan</h2>
                    <Link to = "automobile" className= "btn btn-primary">Auto Mobile</Link>{'   '}
                </div>
            </div>
        </div>
    )
}

export default Loan
