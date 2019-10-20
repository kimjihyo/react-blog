import React from 'react';
import PostEditorView from './PostEditorView.jsx';
import { getPostById } from '../../utils';
import { addPost, editPost } from '../../utils/index.js';
import { Redirect, withRouter } from 'react-router-dom';

class PostEditorViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisibleToPublic: true,
            isCommentEnabled: true,
            title: '',
            body: { "blocks": [{ "key": "6u8nn", "text": "", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }], "entityMap": {} },
            directory: '',
            label: '',
            errorOccured: false,
            didFinishLoading: false,
        }
        this.onSave = this.onSave.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onTitleChanged = this.onTitleChanged.bind(this);
        this.onDirectoryChanged = this.onDirectoryChanged.bind(this);
        this.onLabelChanged = this.onLabelChanged.bind(this);
    }

    componentDidMount() {
        if (this.props.postId) {
            this.fetchPostDetail();
        }
    }

    fetchPostDetail() {
        getPostById(this.props.postId)
            .then(post => {
                this.setState({
                    title: post.title,
                    body: JSON.parse(post.body),
                    directory: post.directory,
                    label: post.label,
                    isCommentEnabled: post.isCommentEnabled,
                    isVisibleToPublic: post.isVisibleToPublic,
                    didFinishLoading: true,
                });
            })
            .catch(error => {
                console.log('hello world \n' + error);
                this.setState({
                    errorOccured: true,
                });
            });
    }

    onTitleChanged(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onDirectoryChanged(e) {
        this.setState({
            directory: e.target.value,
        })
    }

    onLabelChanged(e) {
        this.setState({
            label: e.target.value,
        })
    }

    onSave(value) {
        console.log('title: ' + this.state.title);
        console.log('label: ' + this.state.label);
        console.log('directory: ' + this.state.directory);
        console.log(JSON.stringify(value));
        let post = {
            title: this.state.title,
            label: this.state.label,
            directory: this.state.directory,
            body: JSON.stringify(value),
            date: new Date(Date.now()),
            isCommentEnabled: this.state.isCommentEnabled,
            isVisibleToPublic: this.state.isVisibleToPublic,
            author: 'Jihyo Kim',
        }

        if (this.props.isEditing) {
            editPost(this.props.postId, post, () => {
                this.props.history.push('/post_detail/' + this.props.postId);
            });
        } else {
            addPost(post, (id) => {
                console.log('hello world!!' + id);
                this.props.history.push('/post_detail/' + id);
            });
        }
    }

    onCancel() {
        if (this.props.isEditing) {
            this.props.history.push('/post_detail/' + this.props.postId);
        } else {
            this.props.history.push('/');
        }
    }

    render() {
        if (this.props.isEditing && !this.state.didFinishLoading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
        return (
            <PostEditorView
                onTitleChanged={this.onTitleChanged}
                onDirectoryChanged={this.onDirectoryChanged}
                onLabelChanged={this.onLabelChanged}
                onSave={this.onSave}
                onCancel={this.onCancel}
                title={this.state.title}
                body={this.state.body}
                directory={this.state.directory}
                label={this.state.label}
                isVisibleToPublic={this.state.isVisibleToPublic}
                isCommentEnabled={this.state.isCommentEnabled}
            />
        );
    }
}

export default withRouter(PostEditorViewController);
