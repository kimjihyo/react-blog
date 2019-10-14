import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RichTextEditor from '../text_editor/RichTextEditor.jsx';
import { Typography, Divider } from '@material-ui/core';
import Comment from './Comment.jsx';

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
                    <Comment
                        key={item.id}
                        comment={item}
                        onLikeClicked={() => props.onLikeClicked(item.id)}
                        onReplyClicked={() => props.onReplyClicked(item.id)}
                    />
                ))}
            </div>
            <CommentTextEditorSection 
                placeholder={props.placeholder}
                onCancel={props.onCancel}
                onSave={props.onSave}
                isBlockStyleEnabled={false}
                willDisplayTextEditor={props.willDisplayTextEditor}
            />
        </div>
    );
}

const CommentTextEditorSection = (props) => {
    if (props.willDisplayTextEditor) {
        return (
            <RichTextEditor
                for={'comment-editor'}
                placeholder={props.placeholder}
                onCancel={props.onCancel}
                onSave={props.onSave}
                isBlockStyleEnabled={false}
            />
        );
    } else {
        return (
            <div>
            </div>
        );
    }
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