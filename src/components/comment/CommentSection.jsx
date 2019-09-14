import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RichTextEditor from '../text_editor/RichTextEditor.jsx';
import { Typography } from '@material-ui/core';
import Comment from './Comment.jsx';

const sampleComments = [
    {
        id: 1,
        author: 'Jihyo Kim',
        date: 'April 30, 2019',
        body: 'hello world this is comment',
    },
    {
        id: 2,
        author: 'Samuel Leena',
        date: 'Janurary 21, 2019',
        body: 'another comment that is logngn Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, q',
    },
    {
        id: 3,
        author: 'Unknown User',
        date: 'March 25, 2015',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, q',
    },
]

const CommentSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.commentSection}>
            <Typography
                variant='h6'
            >
                {sampleComments.length} Comments
            </Typography>
            <div className={classes.comments}>
                <Comments />
            </div>
            <RichTextEditor placeholder={'Leave a comment right here...'} />
        </div>
    );
}

const Comments = () => {
    const classes = useStyles();
    return (
        <div>
            {sampleComments.map(item => (
                <Comment key={item.id} comment={item} />
            ))}
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    commentSection: {
    },
    comments: {
        marginBottom: '1em',
    }
}));

export default CommentSection;