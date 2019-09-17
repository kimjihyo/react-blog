import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextEditor from './text_editor/RichTextEditor.jsx';

const NewPost = () => {
    const classes = useStyles();
    return (
        <div className={classes.newPost}>
            <Typography variant='h6'>
                Tell us a story...
            </Typography>
            <div className={classes.newPostTextField}>
                <RichTextEditor placeholder='sample' />
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    newPost: {
        padding: '1em',
        paddingRight: '2em',
    }
}));

export default NewPost;