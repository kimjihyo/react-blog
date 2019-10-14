import React from 'react';
import Page from './Page.jsx';
import SearchResultViewController from '../search/SearchResultViewController.jsx';
import PostDetailViewController from '../post_detail/PostDetailViewController.jsx';
import PostEditor from '../post_editor';

const MainPage = () => {
    return (
        <div className='mainPage'>
            <Page>
                {/* <SearchResultViewController /> */}
                {/* <PostDetailViewController
                    postId={'7JdRtedCQkD0BWLlStfc'}
                /> */}
                <PostEditor />
            </Page>
        </div>
    );
}
export default MainPage;
