import{ AppBar, Toolbar,  makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyle = makeStyles({
    header:{
        position:"fixed",
        background:'#72a0c1',
        height:'60px',
        marginTop:"-8px"
        
    },
    tabs: {
        // background:'#FFFFFF',
        color:'white',
        textDecoration:'none',
        margin:15,
        fontSize: 15,
        display:'flex'
        
    }
})
const NavBar =() =>{
    const classes = useStyle();
return(
    <AppBar className={classes.header}position="static">
        <Toolbar>
            <NavLink className={classes.tabs} to="./home" exact >Home</NavLink>
            <NavLink className={classes.tabs} to="./dashboard" exact >DashBoard</NavLink>
            <NavLink className={classes.tabs} to="./formkyc" exact >KYC</NavLink>
            <NavLink className={classes.tabs} to="./loan" exact >Loan</NavLink>
            <NavLink className={classes.tabs} to="./logout" exact >Logout</NavLink>

        </Toolbar>
    </AppBar>
)
}
export default NavBar;