import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

const PostDetailView = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h5'>
                {props.post.title}
            </Typography>
            <Typography variant='subtitle1'>
                {props.post.date}
            </Typography>
            <p className={classes.body}>{props.post.body}</p>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        margin: '2em 0',
        marginRight: 'auto',
        maxWidth: '55em',
        padding: '0 2em',
    },
    body: {
        marginTop: '1em',
    }
}));

PostDetailView.prototype = {
    post: PropTypes.object.isRequired,
}

export default PostDetailView;
