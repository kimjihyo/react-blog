import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';

const SubComment = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
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
                    {props.comment.date}
                </Typography>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: '2em',
    },
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

export default SubComment;