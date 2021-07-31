import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ErrorMessage from './ErrorMessage';
import NavBar from './NavBar';
import axios from 'axios';



function Formkyc() {
    const history = useHistory();

    const initialValues = {
        fname: '',
        lname: '',
        email: '',
        gender: -1,
        aadhar: '',
        pan: '',
        phone: '',
        intext: false
    }
    const [formvalues, setFormvalues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const Swal = require('sweetalert2')

    const gender = [
        { id: 1, name: "Male" },
        { id: 2, name: "Female" }
    ]
    const handleDoSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formvalues));
        console.log(formvalues);
        console.log("Submitted");

        console.log("===" + Object.entries(formErrors).length);
        setSubmitted(true);
    
        axios
            .post("http://localhost:8080/formkyc/add", formvalues)
            .then((res) => res.data)
            .then((data) => {
                console.log("Submitted To database Successfuly");
                console.log(data);
            })
            .catch((err) => {
                console.log("err");
            });
            Swal.fire(
                'Good job!',
                'You Submitted Sucessfully',
                'success'
              )
        
    };

    const handleOnChange = (event) => {
        const isAccept = event.target.type === "checkbox";
        const { name, value } = event.target;

        setFormvalues((prev) => {
            return {
                ...prev,
                [name]: isAccept ? event.target.checked : value
            }
        });
    }

    const validate = (values) => {
        let errors = {};
        const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        const regexaadhar = /^\d{4}\s\d{4}\s\d{4}$/;
        const regexpan = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
        const regexphone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        if (values.fname == "") {
            errors.fname = "First Name cannot be empty"
        }
        if (values.lname == "") {
            errors.lname = "Last Name cannot be empty"
        }
        if (values.email == "") {
            errors.email = "Email cannot be empty";
        }
        else if (!regex.test(values.email)) {
            errors.email = "Enter valid email";
        }
        if (values.gender < 0) {
            errors.gender = "Please Select Gender"
        }

        if (values.aadhar == "") {
            errors.aadhar = "Aadhar number cannot be empty";
        }
        else if (!regexaadhar.test(values.aadhar)) {
            errors.aadhar = "Enter valid addhar number Example:1234 1234 1234";
        }
        if (values.pan == "") {
            errors.pan = "Pan number cannot be empty";
        }
        else if (!regexpan.test(values.pan)) {
            errors.pan = "Enter valid pan number Example:ABCDE1234F";
        }
        if (values.phone == "") {
            errors.phone = "Phone number cannot be empty";
        }
        else if (!regexphone.test(values.phone)) {
            errors.phone = "Enter valid phone number";
        }
        if (values.intext == false) {
            errors.intext = "Select The Accept Box";
        }
        return errors;
    };
    console.log(formvalues.gender)
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="main">
                <div className="register">
                    <br></br>
                    <h2>KYC Verification</h2>
                    <form onsubmit={handleDoSubmit} noValidate id="register" method="post">
                        {submitted}
                        <label>First Name</label>
                        {/* <br></br> */}
                        <input type="text" placeholder="Enter First Name" name="fname" id="fname" value={formvalues.fname} onChange={handleOnChange} />
                        <ErrorMessage message={formErrors.fname} />
                        <br></br>
                        <label>Last Name</label>
                        {/* <br></br> */}
                        <input type="text" placeholder="Enter Last Name" name="lname" id="lname" value={formvalues.lname} onChange={handleOnChange} />
                        <ErrorMessage message={formErrors.lname} />
                        <br></br>
                        <label>Email</label>
                        {/* <br></br> */}
                        <input type="text" placeholder="Enter Email" name="email" id="email" value={formvalues.email} onChange={handleOnChange} />
                        <ErrorMessage message={formErrors.email} />
                        <br></br>

                        <label>Gender</label>
                        <select name="gender" onChange={handleOnChange}>
                            <option value="-1">Please select a gender</option>
                            {
                                gender.map(x => {
                                    return <option key={x.id} value={x.name}>{x.name}</option>
                                })
                            }
                        </select>
                        <ErrorMessage message={formErrors.gender} />
                        <br></br>


                        <label>Aadhar Number</label>
                        {/* <br></br> */}
                        <input type="text" placeholder="Enter Aadhar Number" name="aadhar" id="aadhar" value={formvalues.aadhar} onChange={handleOnChange} />
                        <ErrorMessage message={formErrors.aadhar} />
                        <br></br>
                        <label>Pan Number</label>
                        {/* <br></br> */}
                        <input type="text" placeholder="Enter Pan Number" name="pan" id="pan" value={formvalues.pan} onChange={handleOnChange} />
                        <ErrorMessage message={formErrors.pan} />
                        <br></br>
                        <label>Phone Number</label>
                        {/* <br></br> */}
                        <input type="text" placeholder="Enter Phone Number" name="phone" id="phone" value={formvalues.phone} onChange={handleOnChange} />
                        <ErrorMessage message={formErrors.phone} />
                        <br></br>
                        <label>Accept</label>
                        <input type="checkbox" name="intext" onChange={handleOnChange} />
                        <ErrorMessage message={formErrors.intext} />
                        <br></br>
                        <button type="submit" onClick={handleDoSubmit}>Submit</button>
                        <br></br>
                        <br></br>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default Formkyc
