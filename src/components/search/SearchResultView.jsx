import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Link, List, ListItem, ListItemText, } from '@material-ui/core';
import { Link as RouteLink } from 'react-router-dom';


const SearchResultView = (props) => {
    const classes = useStyles();
    return (
        <div
            className={classes.searchResultView}
        >
            <ul
                className={classes.nav}
            >
                {props.posts.map(post => (
                    <li
                        key={post.postId}
                        className={classes.postLink}
                    >
                        <RouteLink
                            className={classes.link}
                            key={post.postId}
                            to={'/post_detail/' + post.postId}
                        >
                            {post.postTitle}
                        </RouteLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    searchResultView: {

    },
    postId: {
    },
    title: {
    },
    postLink: {
        // marginBottom: '0.5em',
    },
    link: {
        color: '#1565c0',
    }
}));

export default SearchResultView;