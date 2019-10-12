import React from 'react';
import Footer from '../Footer.jsx';
import SafeArea from '../SafeArea.jsx';
import PostdetailViewController from '../post_detail/PostDetailViewController.jsx';
import HeaderViewController from '../header/HeaderViewController.jsx';

const MainPage = () => {
    return (
        <div className='mainPage'>
            <HeaderViewController />
            <SafeArea>
                <PostdetailViewController
                    postId='7JdRtedCQkD0BWLlStfc'
                />
                <Footer />
            </SafeArea>
        </div>
    );
}
export default MainPage;
