// import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Collapse from '@mui/material/Collapse';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import TableChartIcon from '@mui/icons-material/TableChart';
import { NavLink,Link,useLocation } from 'react-router-dom'
import React, { useContext } from 'react';
import {UserContext} from '../../../Context/UserContext'

import styles from './Sidebar.module.css'



const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    
    [theme.breakpoints.up('xs')]: {
        width: 0,
    },
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export default function Sidebar({ open, handleDrawerClose, handleDrawerOpen }) {
    
    let selectedItem = useLocation().pathname.split('/')[1]
    console.log(selectedItem);

    const {isLoggedIn,currentUser,signOutUser} = useContext(UserContext);
    
    const [openUserCollapse, setOpenUseCollapse] = React.useState(false);

    const theme = useTheme();

    function handleUserClicked() {
        setOpenUseCollapse(!openUserCollapse);
    }

    function handleMouseLeavesDrawer() {
        setOpenUseCollapse(false);
        handleDrawerClose()
    }
    
    React.useEffect(()=>{

    },[selectedItem])


    return (
        <Drawer className={styles.sidebar} variant="permanent" open={open} onMouseEnter={handleDrawerOpen} onMouseLeave={handleMouseLeavesDrawer} PaperProps={{ sx: { backgroundColor: '#31b372', color: 'white' } }}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                    <MenuIcon style={{ color: '#fff' }} />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem key={"Dashboard"} disablePadding sx={{ display: 'block' }}>
                    {/* <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }} > */}
                        <ListItemButton
                            selected={!selectedItem ? true : false}
                            component = {NavLink}
                            to="/" 
                            style={{ textDecoration: 'none', color: 'white' }}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                "&.Mui-selected": {
                                    backgroundColor: "#1b4f32",
                                },
                                "&.Mui-selected:hover": {
                                    backgroundColor: "#1b4f32",
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: '#fff'
                                }}
                            >
                                <DashboardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    {/* </NavLink> */}
                </ListItem>
                <ListItem key={"Users"} disablePadding sx={{ display: 'block' }}>
                    {/* <NavLink to="/users" style={{ textDecoration: 'none', color: 'white' }} > */}
                        <ListItemButton
                            component={NavLink}
                            to="/users"
                            style={{ textDecoration: 'none', color: 'white' }}
                            selected={selectedItem == "users" ? true : false}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                "&.Mui-selected": {
                                    backgroundColor: "#1b4f32",
                                },
                                "&.Mui-selected:hover": {
                                    backgroundColor: "#1b4f32",
                                },
                            }}
                            onClick={handleUserClicked}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <Person2OutlinedIcon style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary={"Users"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    {/* </NavLink> */}
                </ListItem>
                {/* <Collapse in={openUserCollapse} timeout="5000" unmountOnExit >
                    <List component="div" disablePadding sx={{ pl: 3 }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <TableChartIcon style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary={"View Users"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonAddAltIcon style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary={"Add Users"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </List>
                </Collapse> */}
                <ListItem key={"Appointments"} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        component = {NavLink}
                        to="/appointments" 
                        style={{ textDecoration: 'none', color: 'white' }}
                        selected={selectedItem == "appointments" ? true : false}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            "&.Mui-selected": {
                                backgroundColor: "#1b4f32",
                            },
                            "&.Mui-selected:hover": {
                                backgroundColor: "#1b4f32",
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <CalendarTodayOutlinedIcon style={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary={"Appointments"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                {['Patients', 'Starred'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon style={{ color: '#fff' }} /> : <MailIcon style={{ color: '#fff' }} />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Doctors', 'Nurses', 'Medicines'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon style={{ color: '#fff' }} /> : <MailIcon style={{ color: '#fff' }} />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem key={"Logout"} disablePadding sx={{ display: 'block' }} onClick={signOutUser}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <LogoutOutlinedIcon style={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
}