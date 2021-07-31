import React, { useState,useEffect } from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Loan() {
    const history = useHistory();
    const [res, setResult] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/goldreq/users").then(res => res.json()).then(data => {
            console.log(data);
            setResult(data);
        }).catch(e => {
            console.error("ERR ...");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally");
        })

    }, [res])
    // axios.get("http://localhost:8080/formkyc/users").then(res => res.data()).then(data => {
    //     console.log(data);
    //     setResult(data);
    //     console.log(res);
    // }).catch(e => {
    //     console.error("ERR in view Data...");
    //     console.error(e);
    // }).finally(() => {
    //     console.log("I am in finally");
    // });

    return (
        <div>
            <NavBar />
            <br></br>
            <br />
            <br />
            <div className="container-md ">
                <div className="col-sm-13">
                    <div className="card">
                        <div className="card-header"><h4>Loan Request Details</h4></div>
                        <div className="card-body">
                            <table className="table table-bordered table-light">
                                <thead>
                                    <tr className="table-dark">
                                        <th scope="col">Id</th>
                                        <th scope="col">Ornament Type</th>
                                        <th scope="col">Quanity</th>
                                        <th scope="col">Carat</th>
                                        <th scope="col">Weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {res.map((x) => {
                                        return <tr>
                                            <td ><label key={x.id}>{x.id}</label></td>
                                            <td ><label key={x.id}>{x.type}</label></td>
                                            <td ><label key={x.id}>{x.qty}</label></td>
                                            <td ><label key={x.id}>{x.carat}</label></td>
                                            <td ><label key={x.id}>{x.weight}</label></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loan
