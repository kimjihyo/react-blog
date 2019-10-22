import React from 'react';
import PropTypes from 'prop-types';
import SearchResultViewController from '../components/search/SearchResultViewController.jsx';
import { Drawer as MaterialDrawer, List, ListItem, ListItemText, makeStyles, Hidden, Divider, Link, Typography } from '@material-ui/core';
import { Link as RouteLink } from 'react-router-dom';
import { getPostsVerbose } from '../utils/index.js';
const Drawer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MaterialDrawer
                open={props.isOpen}
                onClose={props.onClosed}
                classes={{ paper: classes.drawer }}
                variant={props.variant}
            >
                <div
                    className={classes.drawerContent}
                >
                    <List>
                        {props.items.map(item => {
                            if (item === 'Divider') {
                                return <Divider key='divider' />
                            }

                            return ((
                                <ListItem button key={item + '-drawer'}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ));
                        })}
                    </List>
                    <Typography
                        className={classes.drawerLabel}
                        variant='caption'
                    >
                        PAGE TREE
                </Typography>
                    <ul
                        className={classes.nav}
                    >
                        <li className={classes.linkItem}>
                            <RouteLink to='/' className={classes.link}>
                                Post Detail View
                            </RouteLink>
                        </li>
                        <li className={classes.linkItem}>
                            <Link href='#' className={classes.link}>
                                Post List View
                        </Link>
                        </li>
                        <li className={classes.linkItem}>
                            <RouteLink to='/edit_post' className={classes.link}>
                                Post Editor View
                            </RouteLink>
                        </li>
                        <li className={classes.linkItem}>
                            <Link href='#' className={classes.link}>
                                Search Result View
                        </Link>
                        </li>
                        <li className={classes.linkItem}>
                            <Link href='#' className={classes.link}>
                                Sign In/Up View
                            </Link>
                        </li>
                        <li className={classes.linkItem}>
                            <Link href='#' className={classes.link}>
                                Feedback View
                            </Link>
                        </li>
                        <li className={classes.linkItem}>
                            <RouteLink 
                                to='/debug_page'
                                className={classes.link}
                            >
                                Debug Panel View
                            </RouteLink>
                        </li>
                    </ul>
                    <Typography
                        className={classes.drawerLabel}
                        variant='caption'
                    >
                        POSTS
                    </Typography>
                    <div
                        className={classes.nav}
                    >
                        <SearchResultViewController />
                    </div>
                </div>
            </MaterialDrawer>
        </div>
    );
};

Drawer.prototype = {
    isOpen: PropTypes.bool.isRequired,
    onClosed: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired,
}

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        backgroundColor: 'whitesmoke',
        [theme.breakpoints.up('md')]: {
            paddingTop: '3em',
        },
    },
    drawerContent: {
        paddingRight: '3em',
    },
    links: {
        marginLeft: '2em',
    },
    drawerTitle: {
        marginLeft: '1em',
    },
    nav: {
        marginLeft: '2em',
    },
    drawerLabel: {
        marginLeft: '1em',
        marginTop: '.5em',
        fontWeight: 'bold',
        color: 'grey'
    },
    link: {
        color: '#1565c0',
        fontSize: '15px',
    },
    linkItem: {
        marginBottom: '8px',
    }
}));

export const drawerWidth = 340;
export default Drawer;
