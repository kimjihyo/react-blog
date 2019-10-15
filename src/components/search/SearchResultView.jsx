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
                    <li key={post.postId}>
                        <RouteLink
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

    }
}));

export default SearchResultView;