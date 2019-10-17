import React from 'react';
import SearchResultView from './SearchResultView.jsx';
import { getPostsVerbose, postObserver } from '../../utils';

class SearchResultViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        postObserver(posts => {
            this.setState({
                posts:posts,
            })
        }, error => {
            console.log(error);
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