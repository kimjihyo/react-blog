import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import SubComment from './SubComment.jsx';

const Comment = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Divider className={classes.topDivider} />
            <Typography
                variant='subtitle1'
                color='primary'
            >
                {props.comment.author}
            </Typography>
            <Typography
                variant='body2'
            >
                {props.comment.body}
            </Typography>
            <div className={classes.commentBottomRow}>
                <Typography
                    className={classes.commentBottomRowItem}
                    variant='caption'
                    onClick={props.onLikeClicked}
                >
                    Like
                </Typography>
                <Typography
                    className={classes.commentBottomRowItem}
                    variant='caption'
                    onClick={props.onReplyClicked}
                >
                    Reply
                </Typography>
                <Typography
                    className={classes.commentBottomRowItem}
                    variant='caption'
                >
                    {props.comment.date}
                </Typography>
            </div>
            {props.comment.subComments.map(comment => (
              <SubComment comment={comment}/>  
            ))}
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    topDivider: {
        margin: '.5em 0em',
    },
    commentBottomRow: {
        display: 'flex',
        marginTop: '8px',
    },
    commentBottomRowItem: {
        marginRight: '10px',
    }
}));

export default Comment;

const sampleSubComment = {
        id: 4,
        author: 'Malboro Gold',
        date: 'March 25, 2015',
        body: 'Canada China South Korea United States',
    };