import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import RichTextEditorDisplayer from '../text_editor/RichTextEditorDisplayer.jsx';

const Comment = (props) => {
    const classes = useStyles();

    return (
        <div
            className={props.isSubComment ? classes.subComment : classes.comment}
        >
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
                {!props.isSubComment &&
                    <Typography
                        className={classes.commentBottomRowItem}
                        variant='caption'
                        onClick={props.onReplyClicked}
                    >
                        Reply
                    </Typography>
                }
                {!props.isSubComment &&
                    <Typography
                        className={classes.commentBottomRowItem}
                        variant='caption'
                        onClick={props.onHideSubCommentsClicked}
                    >
                        Hide sub-comments
                    </Typography>
                }
                <Typography
                    className={classes.date}
                    variant='caption'
                >
                    {props.comment.date}
                </Typography>
            </div>
            <Divider className={classes.divider} />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    subComment: {
        marginLeft: '1em',
    },
    divider: {
        margin: '.5em 0em',
    },
    commentBottomRow: {
        display: 'flex',
        marginTop: '8px',
    },
    commentBottomRowItem: {
        marginRight: '10px',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
         },
    },
    date: {
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