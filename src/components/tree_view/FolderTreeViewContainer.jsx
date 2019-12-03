import React from 'react';
import TreeView from './TreeView.jsx';
import { getDirectoryById } from '../../handlers/firestoreHandler.js';
import { getPostById } from '../../utils/index.js';

class FolderTreeViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childDirectories: [],
            childPosts: [],
        }
    }

    componentDidMount() {
        if (this.props.childDirectories != null) {
            this.props.childDirectories.forEach(directoryId => {
                getDirectoryById(directoryId)
                    .then(directory => {
                        this.setState({
                            childDirectories: [...this.state.childDirectories, directory],
                        });
                    });
            });
        }

        if (this.props.childPosts != null) {
            this.props.childPosts.forEach(postId => {
                getPostById(postId)
                    .then(post => {
                        this.setState({
                            childPosts: [...this.state.childPosts, post],
                        });
                    });
            });
        }
    }

    render() {
        return <TreeView
            name={this.props.name}
            childDirectories={this.state.childDirectories}
            childPosts={this.state.childPosts}
            isOpenByDefault={this.props.isOpenByDefault}
            leftMargin={this.props.leftMargin != null ? this.props.leftMargin : 0}
            postIdToBeBolded={this.props.postIdToBeBolded}
            onPostClick={this.props.onPostClick}
        />
    }
}

export default FolderTreeViewContainer;