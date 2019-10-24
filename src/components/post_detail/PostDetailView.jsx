import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography, CircularProgress
} from '@material-ui/core'
import TopUtilRow from './TopUtilRow.jsx';
import BottomRow from './BottomRow.jsx';
import RichTextEditorDisplayer from '../text_editor/RichTextEditorDisplayer.jsx';
import CommentSectionViewController from '../comment/CommentSectionViewController.jsx';

const PostDetailView = (props) => {
    const classes = useStyles();
    if (props.didFailToLoadPost) {
        return (
            <div className={classes.root}>
                Failed To load post
            </div>
        );
    }

    if (!props.post) {
        return (
            <div className={classes.root}>
                <div className={classes.progress}>
                    <CircularProgress />
                </div>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <TopUtilRow
                paths={props.paths}
                onNavLinkClicked={props.onNavLinkClicked}
                onButtonsClicked={props.onButtonsClicked}
            />
            <div className={classes.content}>
                <Typography
                    variant='h4'
                    className={classes.title}
                >
                    {props.post.title}
                </Typography>
                <Typography
                    variant='caption'
                    className={classes.date}
                >
                    Created by {props.post.author} on {props.post.date}
                </Typography>
                <div
                    className={classes.body}
                >
                    <RichTextEditorDisplayer
                        content={props.post.body}
                    />
                </div>
            </div>
            <BottomRow />
            {props.willDisplayCommentSection &&
                <div className={classes.commentSectionRow}>
                    <CommentSectionViewController
                        postId={props.post.id}
                    />
                </div>
            }
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        color: '#222e42',
    },
    progress: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5em',
    },
    date: {
        color: 'grey'
    },
    body: {
        marginTop: '2em',
        marginBottom: '3em',
        lineHeight: 2,
        fontSize: '15px',
        color: '#222e42'
    },
    content: {
        padding: '0 2em',
        marginBottom: '1em',
    },
    commentSectionRow: {
        padding: '0 2em',
    },
}));

PostDetailView.prototype = {
    post: PropTypes.object.isRequired,
}

export default PostDetailView;
