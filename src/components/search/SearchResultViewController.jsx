import React from 'react';
import SearchResultView from './SearchResultView.jsx';
import { getPostsVerbose, postObserver } from '../../utils';
import { withRouter } from 'react-router-dom'

class SearchResultViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentlyViewedPostId: '',
        }

        this.onLinkClicked = this.onLinkClicked.bind(this);
    }

    componentDidMount() {
        postObserver(posts => {
            this.setState({
                posts:posts,
            })
        }, error => {
            console.log(error);
        });
        console.log(this.props.location.pathname);
        console.log(this.props.location.pathname.split('/')[2]);
        let paths = this.props.location.pathname.split('/');

        if (paths.length >= 3) {
            this.setState({
                currentlyViewedPostId: paths[2],
            })
        }
    }

    onLinkClicked(linkClicked) {
        this.setState({
            currentlyViewedPostId: linkClicked,
        })
        console.log(linkClicked);
    }

    render() {
        return (
            <SearchResultView 
                posts={this.state.posts}
                currentlyViewedPostId={this.state.currentlyViewedPostId}
                onLinkClicked={this.onLinkClicked}
            />
        );
    }
}

export default withRouter(SearchResultViewController);