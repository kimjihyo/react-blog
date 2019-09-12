import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Hidden, InputBase, Button } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer, { drawerWidth } from './Drawer.jsx';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const tabItems = ['Sign In', 'Create'];
    const drawerItems = ['Archive', 'Label', 'Settings'];
    const persistentTapItems = [
        {
            text: 'Spaces',
            icon: (<ArrowDropDownIcon />)
        }
    ];

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
                    {persistentTapItems.map(item => (
                        <Button key={item} disableRipple color='inherit' size='small' className={classes.headerButton}>
                            {item.text}
                            {item.icon}
                        </Button>
                    ))}
                    <Hidden xsDown>
                        {tabItems.map(item => (
                            <Button key={item} disableRipple color='inherit' size='small' className={classes.headerButton}>
                                {item}
                            </Button>
                        ))}
                    </Hidden>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search"
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
                    items={drawerItems}
                />
            </Hidden>
            <Hidden mdUp>
                <Drawer
                    isOpen={drawerOpen}
                    variant='temporary'
                    onClosed={onDrawerToggled}
                    items={[...tabItems, 'Divider', ...drawerItems]}
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
    },
    headerButton: {
        textTransform: 'none',
        fontWeight: '400',
    },
    title: {
        display: 'inline',
        marginRight: '1em',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.35),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.45),
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
