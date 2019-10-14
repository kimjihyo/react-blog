import React from 'react';
import PostEditorView from './PostEditorView.jsx';

class PostEditorViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisibleToPublic: true,
            isCommentEnabled: true,
            title: null,
            body: null,
            directory: null,
            label: null,
        }
        this.onSave = this.onSave.bind(this);
        this.oncancel = this.onCancel.bind(this);
        this.onTitleChanged = this.onTitleChanged.bind(this);
        this.onDirectoryChanged = this.onDirectoryChanged.bind(this);
        this.onLabelChanged = this.onLabelChanged.bind(this);
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
        console.log(value)
    }

    onCancel() {

    }

    render() {
        return (
            <PostEditorView
                onTitleChanged={this.onTitleChanged}
                onDirectoryChanged={this.onDirectoryChanged}
                onLabelChanged={this.onLabelChanged} 
                onSave={this.onSave}
                onCancel={this.onCancel}
            />
        );
    }
}

export default PostEditorViewController;
