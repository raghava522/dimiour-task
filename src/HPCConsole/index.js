import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import './styles.css';
import Home from '@mui/icons-material/Home';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import MessageIcon from '@mui/icons-material/Message';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import { makeStyles } from '@mui/styles';
import OpacityIcon from '@mui/icons-material/Opacity';
import { Button, Card, Grid } from '@mui/material';

/**
 * Drawer Functions Starts
 */
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

// Drawer Functions ends

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiPaper-root": {
            backgroundColor: '#dedfde'
        }
    }
}));

const HPCConsole = () => {
    const classes = useStyles();
    useEffect(() => {
        document.title = 'HPC Webapp';
    });

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }} className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
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
                        <MenuIcon sx={{ color: 'black' }} />
                    </IconButton>
                    <OpacityIcon sx={{ width: '4vw', height: '6vh', backgroundColor: 'brown', borderRadius: '50%' }} />
                    <Typography variant="h6" noWrap component="div" sx={{ color: 'black', fontWeight: 'bold', marginLeft: '1rem' }} data-testid="hpc-title">
                        HPC Console
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <button className='user-icon'>
                        GK
                    </button>
                    <Typography variant="h6" noWrap component="div" fontWeight='bold' fontSize={17}>
                        Hello, Admin
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem key="Home" disablePadding sx={{ display: 'block' }}>
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
                                <Home sx={{ color: 'brown' }} />
                            </ListItemIcon>
                            <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key="Cost Optimizer" disablePadding sx={{ display: 'block' }}>
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
                                <AutoFixNormalIcon sx={{ color: 'brown' }} />
                            </ListItemIcon>
                            <ListItemText primary="Cost Optimizer" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key="Messages" disablePadding sx={{ display: 'block' }}>
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
                                <MessageIcon sx={{ color: 'brown' }} />
                            </ListItemIcon>
                            <ListItemText primary="Messages" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key="Report" disablePadding sx={{ display: 'block' }}>
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
                                <AssessmentIcon sx={{ color: 'brown' }} />
                            </ListItemIcon>
                            <ListItemText primary="Report" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key="Logout" disablePadding sx={{ display: 'block' }}>
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
                                <LogoutIcon sx={{ color: 'brown' }} />
                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
                    Home Screen
                </Typography>
                <Grid container>
                    <Grid item xs={8}>
                        <br />
                        <br />
                        <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold', fontSize: '15px' }}>
                            Optimizer History
                        </Typography>
                        <Card sx={{ width: '50vw', maxHeight: '45vh', overflowY: 'scroll', backgroundColor: 'white !important', boxShadow: '5px 5px 7px gray' }}>
                            <Grid container justifyContent='center' alignContent='center' sx={{ margin: '1rem' }}>
                                <Grid item xs={6}>
                                    <div>test 60k</div>
                                    <div>08/06/2022 - 09/06/2022</div>
                                </Grid>
                                <Grid item xs={3}>
                                    Anticipated Savings
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="contained">$368841.96</Button>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid container justifyContent='center' alignContent='center' sx={{ margin: '1rem' }}>
                                <Grid item xs={6}>
                                    <div>test 60k</div>
                                    <div>08/06/2022 - 09/06/2022</div>
                                </Grid>
                                <Grid item xs={3}>
                                    Anticipated Savings
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="contained">$368841.96</Button>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid container justifyContent='center' alignContent='center' sx={{ margin: '1rem' }}>
                                <Grid item xs={6}>
                                    <div>test 60k</div>
                                    <div>08/06/2022 - 09/06/2022</div>
                                </Grid>
                                <Grid item xs={3}>
                                    Anticipated Savings
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="contained">$368841.96</Button>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid container justifyContent='center' alignContent='center' sx={{ margin: '1rem' }}>
                                <Grid item xs={2}>
                                    <span className='view-more-cls'>View More</span>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Card className='card-cls'>
                                    <div className='card-title'>46</div>
                                    <div>Provider Count</div>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card className='card-cls'>
                                    <div className='card-title'>40,459</div>
                                    <div>Total Stations</div>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className='card-cls'>
                                    <div className='card-title'>4,722,262.215</div>
                                    <div>Total Estimated Savings</div>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default HPCConsole;