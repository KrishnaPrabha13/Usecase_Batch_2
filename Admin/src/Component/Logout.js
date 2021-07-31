import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import NavBar from './NavBar';



const Logout = () => {
    const history = useHistory();

    const onSubmitHandler = (e) => {
        history.push("/");
    }
    const onSubmitHandler1 = (e) => {
        history.push("/home");
    }


    return (
        <div className="logbutton">
            <NavBar />
            <h3>Do you want to Logout?</h3>
            <div>
                <Button variant="contained" onClick={onSubmitHandler1} color="primary">
                    Cancel
                </Button>
            </div>
           <br></br>
            <div>
                <Button variant="contained" onClick={onSubmitHandler} color="primary">
                    Logout
                </Button>
            </div>
        </div>
    )
}
export default Logout