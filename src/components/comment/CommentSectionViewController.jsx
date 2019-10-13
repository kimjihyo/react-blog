import React from 'react';
import CommentSectionView from './CommentSectionView.jsx';
import { getCommentsByPostId, addComment, sampleQuery } from '../../utils';

class CommentSectionViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsLoaded: false,
            comments: [],
        }

        getCommentsByPostId(props.postId)
        .then(comments => {
            this.setState({
                comments: comments,
                commentsLoaded: true,
            })
        })
        .catch(e => {
            this.setState({
                commentsLoaded: false,
                comments: [],
            })
        });

        this.getComments = this.getComments.bind(this);
        this.getNumberOfComments = this.getNumberOfComments.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onCancel = this.onCancel.bind(this);

    }
    onCancel() {
    }

    onSave(value) {
    }

    isEmpty(draftJsObject) {
    }
    
    getPlaceHolder() {
        return 'Please write a comment here...';
    }

    getNumberOfComments() {
        return this.state.comments.length;
    }

    getComments() {
        return this.state.comments;
    }

    onLikeClicked(id) {
        console.log('like' + id);
    }

    onReplyClicked(id) {
        console.log('reply' + id);
    }

    render() {
        return (
            <CommentSectionView 
                numberOfComments={this.getNumberOfComments()}
                comments={this.getComments()}
                placeholder={this.getPlaceHolder()}
                onCancel={this.onCancel}
                onSave={this.onSave}
                onLikeClicked={this.onLikeClicked}
                onReplyClicked={this.onReplyClicked}
            />
        )
    }
}

export default CommentSectionViewController;