import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PostMiniCard from './PostMiniCard.jsx';

const Posts = (props) => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} justify='center' className={classes.root}>
            {props.posts.map(post => (
                <Grid item className={classes.postMiniCard}>
                    <PostMiniCard post={post}/>
                </Grid>
            ))}
        </Grid>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '60em',
        margin: '0 auto',
    }
}));

Posts.prototype = {
    posts: PropTypes.array.isRequired,
}

export default Posts;
