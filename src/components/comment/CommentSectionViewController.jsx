import React from 'react';
import CommentSectionView from './CommentSectionView.jsx';
import { getCommentsByPostId, addComment } from '../../utils';

class CommentSectionViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }

        getCommentsByPostId(props.postId)
        .then(comments => {
            console.log(comments);
            this.setState({
                comments: comments,
            })
        })
        .catch(e => {

        });
        this.getComments = this.getComments.bind(this);
        this.getNumberOfComments = this.getNumberOfComments.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onCancel() {
        console.log('Cancel');
    }

    onSave(value) {
        console.log('Save');
        if (!this.isEmpty(value)) {
            addComment({
                postid: this.props.postId,
                author: "Jihyo Kim",
                date: new Date(Date.now()),
                body: value,
            });
        }
    }

    isEmpty(draftJsObject) {
        let numOfEmptyBlocks = 0;
        for (let i = 0; i < draftJsObject.blocks.length; i++) {
            console.log(draftJsObject.blocks[i].text);
            if (draftJsObject.blocks[i].text === "") {
                numOfEmptyBlocks += 1;
            }
        }
        return (numOfEmptyBlocks === draftJsObject.blocks.length);
    }

    onPreviewClicked() {
        console.log('Preview');
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
                onPreviewClicked={this.onPreviewClicked}
                onLikeClicked={this.onLikeClicked}
                onReplyClicked={this.onReplyClicked}
            />
        )
    }
}

export default CommentSectionViewController;

const sampleComments = [
    {
        id: 1,
        author: 'Jihyo Kim',
        date: 'April 30, 2019',
        body: 'hello world this is comment',
        subComments: [
            {
                id: 6,
                author: 'Unknown User',
                date: 'March 25, 2020',
                body: 'I am Jihyo Kim. Nice to meet you.',
            },
        ],
    },
    {
        id: 2,
        author: 'Samuel Leena',
        date: 'Janurary 21, 2019',
        body: 'another comment that is logngn Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, q',
        subComments: [],
    },
    {
        id: 3,
        author: 'Unknown User',
        date: 'March 25, 2015',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, q',
        subComments: [],
    },
    {
        id: 4,
        author: 'Malboro Gold',
        date: 'March 25, 2015',
        body: 'Canada China South Korea United States',
        subComments: [
            {
                id: 8,
                author: 'Unknown User',
                date: 'March 25, 2020',
                body: 'another comment that is logngn Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, q',
            },
            {
                id: 9,
                author: 'Unknown User',
                date: 'March 25, 2020',
                body: 'I am Jihyo Kim. Nice to meet you.',
            },
            {
                id: 10,
                author: 'Unknown User',
                date: 'March 25, 2020',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, q',
            },
        ],
    },
]