import React from 'react';
import CommentSectionView from './CommentSectionView.jsx';

const sampleComments = [
    {
        id: 1,
        author: 'Jihyo Kim',
        date: 'April 30, 2019',
        body: 'hello world this is comment',
    },
    {
        id: 2,
        author: 'Samuel Leena',
        date: 'Janurary 21, 2019',
        body: 'another comment that is logngn Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, q',
    },
    {
        id: 3,
        author: 'Unknown User',
        date: 'March 25, 2015',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, q',
    },
    {
        id: 4,
        author: 'Malboro Gold',
        date: 'March 25, 2015',
        body: 'Old town road, Malboro Gold, and love',
    },
]


class CommentSectionViewController extends React.Component {
    constructor(props) {
        super(props);
    }


    onCancel() {
        console.log('Cancel');
    }

    onSave(value) {
        console.log('Save');
        console.log(value);
    }

    onPreviewClicked() {
        console.log('Preview');
    }

    getPlaceHolder() {
        return 'Please write a comment here...';
    }

    getNumberOfComments() {
        return sampleComments.length;
    }

    getComments() {
        return sampleComments;
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
            />
        )
    }
}

export default CommentSectionViewController;