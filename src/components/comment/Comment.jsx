import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';

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
                >
                    Like
                </Typography>
                <Typography
                    className={classes.commentBottomRowItem}
                    variant='caption'
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