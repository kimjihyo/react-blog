import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RichTextEditor from '../text_editor/RichTextEditor.jsx';
import { Typography } from '@material-ui/core';
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
            <div className={classes.comments}>
                {props.comments.map(item => (
                    <Comment
                        key={item.id}
                        comment={item}
                    />
                ))}
            </div>
            <RichTextEditor
                placeholder={props.placeholder}
                onCancel={props.onCancel}
                onSave={props.onSave}
                onPreviewClicked={props.onPreviewClicked}
                isBlockStyleEnabled={false}
            />
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

export default CommentSectionView;