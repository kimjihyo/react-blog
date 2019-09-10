import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Hidden, InputBase, Tabs, Tab } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer, { drawerWidth } from './Drawer.jsx';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [tabSelected, setTabSelected] = useState(0);
    const tabItems = ['Home', 'Sign In', 'Create'];

    const onTabChanged = (e, newValue) => {
        setValue(newValue);
    }

    const onDrawerToggled = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar variant='dense'>
                    <Hidden mdUp>
                        <IconButton
                            className={classes.menuButton}
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            onClick={onDrawerToggled}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Typography className={classes.title} variant='subtitle1'>
                        jihyo-kim
                    </Typography>
                    <Tabs
                        value={tabSelected}
                        onChange={onTabChanged}
                        variant='standard'
                        indicatorColor='primary'
                    >
                        {tabItems.map(item => (
                            <Tab component='a' key={item} label={item} />
                        ))}
                    </Tabs>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search posts..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Hidden smDown>
                <Drawer
                    isOpen={true}
                    variant='permanent'
                />
            </Hidden>
            <Hidden mdUp>
                <Drawer
                    isOpen={drawerOpen}
                    variant='temporary'
                    onClosed={onDrawerToggled}
                />
            </Hidden>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        // [theme.breakpoints.up('md')]: {
        //     marginLeft: drawerWidth,
        //     width: `calc(100% - ${drawerWidth}px)`,
        // },
    },
    title: {
        display: 'inline',
        marginRight: '1em',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginLeft: 'auto',
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

export default Header;
