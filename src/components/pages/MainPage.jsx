import React from 'react';
import Page from './Page.jsx';
import SearchResultViewController from '../search/SearchResultViewController.jsx';
import PostDetailViewController from '../post_detail/PostDetailViewController.jsx';

const MainPage = () => {
    return (
        <div className='mainPage'>
            <Page>
                {/* <SearchResultViewController /> */}
                <PostDetailViewController
                    postId={'7JdRtedCQkD0BWLlStfc'}
                />
            </Page>
        </div>
    );
}
export default MainPage;
