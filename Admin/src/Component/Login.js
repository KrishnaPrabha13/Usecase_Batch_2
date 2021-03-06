import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";
import { useMediaQuery } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import './StylePage.css';


const Login= () => {
  const intialValues = {
    email: "",
    password: ""
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const rey = useMediaQuery("(max-width:500px)");

  const handleDoSubmit = (e) => {
    e.preventDefault();

    setformErrors(validate(formValues));
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validate = (values) => {
    let errors = {};
    console.log(values);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    }

    console.log("keys", Object.keys(errors).length);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      history.push("/home");
    }
    else {
      console.warn("Invalid Credentials!..");
    }

    return errors;
  };

  return (
    <div>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-4 text-center rounded">
           Admin Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={3}
            md={5}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={handleDoSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={formValues.email} onChange={handleOnChange}/>
                <div style={{ color: "red" }}>
                    <ErrorMessage message={formErrors.email} />
                </div> 
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="password" value={formValues.password} onChange={handleOnChange}/>
                <div style={{ color: "red" }}>
                    <ErrorMessage message={formErrors.password} />
                </div>
              </Form.Group>

              <Button  color= "primary" variant="success btn-block" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      {rey && (
        <div style={{ backgroundColor: "grey", textAlign: "center" }}>
          Screen Switched to mobile version
        </div>
      )}
    </div>
  );
};

export default Login;
