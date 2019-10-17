import React from 'react';
import PropTypes from 'prop-types';
import SearchResultViewController from '../components/search/SearchResultViewController.jsx';
import { Drawer as MaterialDrawer, List, ListItem, ListItemText, makeStyles, Hidden, Divider, Link, Typography } from '@material-ui/core';
import { Link as RouteLink } from 'react-router-dom';
import { getPostsVerbose } from '../utils/index.js';
const Drawer = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState([]);

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
                    >
                        Demo Page Links
                </Typography>
                    <ul
                        className={classes.nav}
                    >
                        <li>
                            <RouteLink to='/'>
                                <Link>
                                    Post Detail View
                            </Link>
                            </RouteLink>
                        </li>
                        <li>
                            <Link href='#'>
                                Post List View
                        </Link>
                        </li>
                        <li>
                            <RouteLink to='/edit_post'>
                                <Link>
                                    Post Editor View
                           </Link>
                            </RouteLink>
                        </li>
                        <li>
                            <Link href='#'>
                                Search Result View
                        </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                Sign In/Up View
                        </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                Feedback View
                        </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                Debug Panel View
                        </Link>
                        </li>
                    </ul>
                    <Typography
                        className={classes.drawerLabel}
                    >
                        Sample Post Links
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
        marginBottom: '.5em',
        marginTop: '.5em',
    }
}));

export const drawerWidth = 340;
export default Drawer;
