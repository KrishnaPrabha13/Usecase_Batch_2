import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ErrorMessage from './ErrorMessage';
import NavBar from './NavBar';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function Goldreq() {
    const history = useHistory();
    
    const initialValues = {
        type: -1,
        qty:'',
        carat: -1,
        weight:'',
        intext:false
    }
    
    const [formvalues, setFormvalues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const Swal = require('sweetalert2')


    const type = [
        { id: 1, name: "Chain" },
        { id: 2, name: "Bangles" },
        { id: 3, name: "Ring"},
        { id: 4, name: "Earring"},
        { id: 5, name: "Necklaces"},
        { id: 6, name: "Bracelets"}
    ]

    const carat = [
        { id: 1, name: "18" },
        { id: 2, name: "22" },
        { id: 3, name: "24"}
    ]
    const handleDoSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formvalues));
        console.log(formvalues);
        console.log("Submitted");

        console.log("===" + Object.entries(formErrors).length);
        setSubmitted(true);
        
        axios
            .post("http://localhost:8080/goldreq/add", formvalues)
            .then((res) => res.data)
            .then((data) => {
                console.log("Submitted to database");
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
        const isAccept=event.target.type==="checkbox";
        const {name, value} = event.target;

        setFormvalues((prev) => {
            return {
                ...prev,
                [name]:isAccept?event.target.checked:value
            }
        });
    }

    const validate = (values) => {
        let errors = {};

        if (values.type < 0) {
            errors.type = "Please Select Gender"
        }
        if (values.qty == "") {
            errors.qty = "Quanity cannot be empty";
        }
        if (values.carat < 0) {
            errors.carat = "Please Select Gender"
        }
        if (values.weight == "") {
            errors.weight = "Weight cannot be empty";
        }
        if(values.intext==false)
        {
            errors.intext = "Select The Accept Box";
        }
        return errors;
    };
    return (
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="main">
                <div className="register">
                    <h2>Gold Loan Request</h2>
                    <form onsubmit={handleDoSubmit} noValidate id="register" method="post">
                        {submitted}
                        <label>Ornanent Type</label>
                        <select name="type" onChange={handleOnChange}>
                            <option value="-1">Please select a type</option>
                            {
                                type.map(x => {
                                    return <option key={x.id} value={x.name}>{x.name}</option>
                                })
                            }
                        </select>
                        <ErrorMessage message={formErrors.type} />
                        <br></br>

                        <label>Quanity</label>
                        <input type="number" placeholder="Enter Quanity" name="qty" id="qty" value={formvalues.qty} onChange={handleOnChange} />
                        <ErrorMessage message={formErrors.qty} />
                        <br></br>

                        <label>Carat</label>
                        <select name="carat" onChange={handleOnChange}>
                            <option value="-1">Please select a carat</option>
                            {
                                carat.map(x => {
                                    return <option key={x.id} value={x.name}>{x.name}</option>
                                })
                            }
                        </select>
                        <ErrorMessage message={formErrors.carat} />
                        <br></br>

                        <label>Weight (Grms)</label>
                        <input type="number" placeholder="Enter Weight" name="weight" id="weight" value={formvalues.weight} onChange={handleOnChange} />
                        <ErrorMessage message={formErrors.weight} />
                        <br></br>
                        <label>Accept</label>
                        <input type="checkbox" name="intext" onChange={handleOnChange}/>
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
export default Goldreq
