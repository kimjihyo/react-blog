import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import SubComment from './SubComment.jsx';
import RichTextEditorDisplayer from '../text_editor/RichTextEditorDisplayer.jsx';

const Comment = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Typography
                variant='subtitle1'
                color='primary'
            >
                {props.comment.author}
            </Typography>
            <div
                className={classes.commentBody}
            >
                <RichTextEditorDisplayer
                    content={props.comment.body}
                />
            </div>
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
            <Divider className={classes.divider} />
            {/* {props.comment.subComments.map(comment => (
              <SubComment
                key={comment.id}
                comment={comment}
              />  
            ))} */}
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    divider: {
        margin: '.5em 0em',
    },
    commentBottomRow: {
        display: 'flex',
        marginTop: '8px',
    },
    commentBottomRowItem: {
        marginRight: '10px',
    },
    commentBody: {
        lineHeight: 2,
        fontSize: '14px',
    }
}));

export default Comment;

const sampleSubComment = {
    id: 4,
    author: 'Malboro Gold',
    date: 'March 25, 2015',
    body: 'Canada China South Korea United States',
};