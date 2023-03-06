import styles from './Header.module.css'
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const Header = ({open,handleDrawerOpen,headerTitle}) => {
  const navigate = useNavigate();

  const redirectToHome =() =>{
    navigate("/");
  }
    return (
        <AppBar position="fixed" open={open} style={{ backgroundColor: '#fff',color:"#31b372",boxShadow:"None" }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div" onClick={redirectToHome} >
            {/* {headerTitle} */}
            Green Hills Hospital 
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Header;
