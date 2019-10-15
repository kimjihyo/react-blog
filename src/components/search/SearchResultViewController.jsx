import React from 'react';
import SearchResultView from './SearchResultView.jsx';
import { getPostsVerbose } from '../../utils';

class SearchResultViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
        getPostsVerbose()
        .then(posts => {
            console.log(posts);
            this.setState({
                posts: posts,
            })
        });
    }

    render() {
        return (
            <SearchResultView 
                posts={this.state.posts}
            />
        );
    }
}

export default SearchResultViewController;