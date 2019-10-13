import React from 'react';
import SearchResultView from './SearchResultView.jsx';
import { getPostings } from '../../utils';

class SearchResultViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postings: [],
        }
        getPostings()
        .then(postings => {
            this.setState({
                postings: postings,
            })
        });
    }

    render() {
        return (
            <SearchResultView 
                postings={this.state.postings}
            />
        );
    }
}

export default SearchResultViewController;