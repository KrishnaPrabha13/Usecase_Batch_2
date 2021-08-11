import React from 'react'
import axios from 'axios';
import { Button, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavBar from './NavBar';


export default function Dash() {
    const history = useHistory();
    const [det,setDet]=React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get("http://localhost:8080/formkyc/users");
          setDet(result.data);
        };
        fetchData();
      }, [det]);


    return (
        <div>
            <NavBar/>
          <br/>
          <br/>
          <h2>Welcome</h2>
          <Button  onClick={() => history.push("/kycview")}>
              <br></br>
              Kyc Details
            </Button>
        </div>
    )
}