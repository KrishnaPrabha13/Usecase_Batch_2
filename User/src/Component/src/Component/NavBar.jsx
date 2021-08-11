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
        marginLeft:'90px',
        fontSize: 15,
        textAlign:'center',
        display:'grid',
        gridTemplateColumns:'repeat(1,auto)',
        gridGap:'10px',
        justifyContent:'end',
        width:'70vw',
        marginRight:'2rem'
    }
})
const NavBar =() =>{
    const classes = useStyle();
return(
    <AppBar className={classes.header}position="static">
        <Toolbar>
            <NavLink className={classes.tabs} to="./home" exact >Home</NavLink>
            <NavLink className={classes.tabs} to="./dashboard" exact >DashBoard</NavLink>
            <NavLink className={classes.tabs} to="./formkyc/add" exact >KYC</NavLink>
            <NavLink className={classes.tabs} to="./loan" exact >Loan</NavLink>
            <NavLink className={classes.tabs} to="./logout" exact >Logout</NavLink>

        </Toolbar>
    </AppBar>
)
}
export default NavBar;