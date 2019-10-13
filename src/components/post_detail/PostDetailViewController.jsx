import React from 'react';
import PostDetailView from './PostDetailView.jsx';
import { getPostById, convertSecondsToDate } from '../../utils';

class PostDetailViewController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            didFailToLoadPost: false,
            post: null,
        }

        getPostById(this.props.postId)
            .then(post => {
                this.setState({
                    post: { 
                        ...post,
                        id: this.props.postId,
                        body: JSON.parse(post.body),
                    },
                    didFailToLoadPost: false,
                });
            })
            .catch(error => {
                console.log('hello world \n' + error);
                this.setState({
                    didFailToLoadPost: true,
                });
            });

        this.onButtonsClicked = this.onButtonsClicked.bind(this);
        this.getPaths = this.getPaths.bind(this);
        this.getPost = this.getPost.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handlePageHistory = this.handlePageHistory.bind(this);
        this.handlePageInformation = this.handlePageInformation.bind(this);
        this.handleImportWordDocument = this.handleImportWordDocument.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleMove = this.handleMove.bind(this);
    }

    onNavLinkClicked(link) {
        console.log(link);
    }

    onButtonsClicked(buttonType) {
        switch (buttonType) {
            case 'Edit':
                this.handleEdit();
                break;
            case 'Save for later':
                this.handleSave();
                break;
            case 'Share':
                this.handleShare();
                break;
            case 'Page History':
                this.handlePageHistory();
                break;
            case 'Page Information':
                this.handlePageInformation();
                break;
            case 'Import Word Document':
                this.handleImportWordDocument();
                break;
            case 'Copy':
                this.handleCopy();
                break;
            case 'Move':
                this.handleMove();
                break;
            default:
                console.log(buttonType);
        }
    }

    getPaths() {
        return ['Home', 'Hidden', 'Mock Data'];
    }

    getPost() {
        return this.state.post;
    }

    handleEdit() {
        console.log('Edit clicked');
        console.log(this.state.post);
    }

    handleSave() {
        console.log('Save clicked');
    }

    handleShare() {
        console.log('Share clicked');
    }

    handlePageHistory() {
        console.log('Page History clicked');
    }

    handlePageInformation() {
        console.log('Page Information clicked');
    }

    handleImportWordDocument() {
        console.log('Import Word Document clicked');
    }

    handleCopy() {
        console.log('Copy clicked');
    }

    handleMove() {
        console.log('Move clicked');
    }

    render() {
        return (
            <PostDetailView
                didFailToLoadPost={this.state.didFailToLoadPost}
                post={this.getPost()}
                paths={this.getPaths()}
                onNavLinkClicked={this.onNavLinkClicked}
                onButtonsClicked={this.onButtonsClicked}
            />
        );
    }
}

export default PostDetailViewController;