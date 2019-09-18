import React from 'react';
import PostDetailView from './PostDetailView.jsx';

const samplePost = {
    id: 0,
    title: 'Sample post',
    date: 'Friday, January 26, 2018',
    author: 'Jihyo Kim',
    summary: 'helllllo world!!',
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefininjected humour, or non-characteristic words etc.",
}

class PostDetailViewController extends React.Component {
    constructor(props) {
        super(props);
    }

    onNavLinkClicked(link) {
        console.log(link);
    }

    onTopUtilRowButtonClicked(buttonType) {
        console.log(buttonType);
    }

    onMoreDropDownContentClicked(buttonType) {
        console.log(buttonType);
    }

    getPaths() {
        return ['Link', 'Link', 'Link', 'Link'];
    }

    getPost() {
        return samplePost;
    }

    render() {
        return (
            <PostDetailView
                post={this.getPost()}
                paths={this.getPaths()}
                onNavLinkClicked={this.onNavLinkClicked}
                onTopUtilRowButtonClicked={this.onTopUtilRowButtonClicked}
                onMoreDropDownContentClicked={this.onMoreDropDownContentClicked}
            />
        );
    }
}

export default PostDetailViewController;