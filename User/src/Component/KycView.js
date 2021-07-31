import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBar from './NavBar';
export default function View() {
    const history = useHistory();
    const [res, setResult] = useState([]);

        axios.get("http://localhost:8080/formkyc/users").then(res => res.data()).then(data => {
            console.log(data);
            setResult(data);
            console.log(res);
        }).catch(e => {
            console.error("ERR in view Data...");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally");
        });
        

    return (
        <div>
            <div className="container-md ">
                <div className="col-sm-13">
                    <div className="card">
                        <div className="card-header"><h4>KYC Details</h4></div>
                        <div className="card-body">
                            <table className="table table-bordered table-light">
                                <thead>
                                    <tr className="table-dark">
                                        <th scope="col">Id</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Aadhar Number</th>
                                        <th scope="col">Pan Number</th>
                                        <th scope="col">Phone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {res.map((x) => {
                                        return <tr>
                                            <td ><label key={x.id}>{x.id}</label></td>
                                            <td ><label key={x.id}>{x.fname}</label></td>
                                            <td ><label key={x.id}>{x.lname}</label></td>
                                            <td ><label key={x.id}>{x.email}</label></td>
                                            <td ><label key={x.id}>{x.gender}</label></td>
                                            <td ><label key={x.id}>{x.aadhar}</label></td>
                                            <td ><label key={x.id}>{x.pan}</label></td>
                                            <td ><label key={x.id}>{x.phone}</label></td>
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
        // <div>
        //     <NavBar/>
        //     <br/>
        //     <br></br>
        //     <br/>
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th scope="col">Id</th>
        //                 <th scope="col">First Name</th>
        //                 <th scope="col">Last Name</th>
        //                 <th scope="col">Email</th>
        //                 <th scope="col">Gender</th>
        //                 <th scope="col">Aadhar Number</th>
        //                 <th scope="col">Pan Number</th>
        //                 <th scope="col">Phone Number</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {

        //                 det.map((x) => {
        //                     return (
        //                         <tr>
        //                             <th scope = "row">{x.id}</th>
        //                             <td>{x.fname}</td>
        //                             <td>{x.lname}</td>
        //                             <td>{x.email}</td>
        //                             <td>{x.gender}</td>
        //                             <td>{x.aadhar}</td>
        //                             <td>{x.pan}</td>
        //                             <td>{x.phone}</td>
        //                         </tr>
        //                     )
        //                 })
        //             }
