import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ErrorMessage from './ErrorMessage';
import NavBar from './NavBar';
import axios from 'axios';



function Goldreq() {
    const history = useHistory();
    
    const initialValues = {
        Type: -1,
        qty:'',
        Carat: -1,
        weight:'',
        intext:false
    }
    
    const [formvalues, setFormvalues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

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
        axios.post("http://localhost:4008/goldinfo",formvalues);
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

        if (values.Type < 0) {
            errors.Type = "Please Select Gender"
        }
        if (values.qty == "") {
            errors.qty = "Quanity cannot be empty";
        }
        if (values.Carat < 0) {
            errors.Carat = "Please Select Gender"
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
                        <select name="Type" onChange={handleOnChange}>
                            <option value="-1">Please select a type</option>
                            {
                                type.map(x => {
                                    return <option value={x.id}>{x.name}</option>
                                })
                            }
                        </select>
                        <ErrorMessage message={formErrors.Type} />
                        <br></br>

                        <label>Quanity</label>
                        <input type="text" placeholder="Enter Quanity" name="qty" id="qty" onChange={handleOnChange} />
                        <ErrorMessage message={formErrors.qty} />
                        <br></br>

                        <label>Carat</label>
                        <select name="Carat" onChange={handleOnChange}>
                            <option value="-1">Please select a carat</option>
                            {
                                carat.map(x => {
                                    return <option value={x.id}>{x.name}</option>
                                })
                            }
                        </select>
                        <ErrorMessage message={formErrors.Carat} />
                        <br></br>

                        <label>Weight</label>
                        <input type="text" placeholder="Enter Weight" name="weight" id="weight" value={formvalues.weight} onChange={handleOnChange} />
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
