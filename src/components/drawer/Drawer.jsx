import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as MaterialDrawer, List, ListItem, ListItemText, makeStyles, Hidden, Divider, Link, Typography } from '@material-ui/core';
import { Link as RouteLink } from 'react-router-dom';
import ListWithTopLabel from './ListWithTopLabel.jsx';

const demoViews = [
    {
        viewName: 'Post Detail View',
        to: '/',
    },
    {
        viewName: 'Post List View',
        to: '/',
    },
    {
        viewName: 'Post Editor View',
        to: '/edit_post',
    },
    {
        viewName: 'Search Result View',
        to: '/',
    },
    {
        viewName: 'Debug View',
        to: '/debug_page',
    },
];

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
                    <ListWithTopLabel
                        label='PAGE TREE'
                        items={demoViews.map(view => (
                            <RouteLink
                                to={view.to}
                                className={classes.link}
                            >
                                {view.viewName}
                            </RouteLink>
                        ))}
                    />
                    <Divider
                        className={classes.divider}
                    />
                    <ListWithTopLabel
                        label='POSTS'
                        items={props.posts.map(post => (
                            <RouteLink
                                className={post.postId === props.currentlyViewedPostId ?
                                    classes.boldedLink : classes.link}
                                key={post.postId}
                                to={'/post_detail/' + post.postId}
                                onClick={() => { props.onPostClicked(post.postId) }}
                            >
                                {post.postTitle}
                            </RouteLink>
                        ))}
                    />
                    <Divider
                        className={classes.divider}
                    />
                    <ListWithTopLabel
                        label='POSTS 2'
                        items={props.posts.map(post => (
                            <RouteLink
                                className={post.postId === props.currentlyViewedPostId ?
                                    classes.boldedLink : classes.link}
                                key={post.postId}
                                to={'/post_detail/' + post.postId}
                                onClick={() => { props.onPostClicked(post.postId) }}
                            >
                                {post.postTitle}
                            </RouteLink>
                        ))}
                    />
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
    bold: {
        fontWeight: 'bold',
    },
    drawerContent: {
        marginBottom: '5em',
    },
    unorderedList: {
        marginLeft: '2em',
    },
    drawerLabel: {
        color: 'grey',
        marginBottom: '.5em',
        marginLeft: '1em',
    },
    link: {
        color: '#1565c0',
        fontSize: '13px',
    },
    listItem: {
        marginBottom: '8px',
    },
    boldedLink: {
        color: '#1565c0',
        fontWeight: 'bold',
        fontSize: '13px',
    },
    divider: {
        margin: '1em 0',
    }
}));

export const drawerWidth = 340;
export default Drawer;
