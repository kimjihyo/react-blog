import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RichTextEditor from '../text_editor/RichTextEditor.jsx';
import { Typography, Divider } from '@material-ui/core';
import Comment from './Comment.jsx';
import CommentViewController from './CommentViewController.jsx';

const CommentSectionView = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.commentSection}>
            <Typography
                variant='h6'
            >
                {props.numberOfComments} Comments
            </Typography>
            <Divider className={classes.divider} />
            <div className={classes.comments}>
                {props.comments.map(item => (
                    <CommentViewController
                        key={item.id}
                        comment={item}
                        onLikeClicked={props.onLikeClicked}
                        onReplyClicked={props.onReplyClicked}
                        willDisplaySubComments={true}
                        closeOtherOpenTextEditors={props.closeOtherOpenTextEditors}
                    />
                ))}
            </div>
            {props.willDisplayTextEditor &&
                <RichTextEditor
                    placeholder={props.placeholder}
                    onCancel={props.onCancel}
                    onSave={props.onSave}
                    isBlockStyleEnabled={false}
                />
            }
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    divider: {
        margin: '.5em 0em',
    },
    commentSection: {
    },
    comments: {
        marginBottom: '2em',
    }
}));

export default CommentSectionView;