import React from 'react';
import Footer from '../Footer.jsx';
import SafeArea from '../SafeArea.jsx';
import PostdetailViewController from '../post_detail/PostDetailViewController.jsx';
import HeaderViewController from '../header/HeaderViewController.jsx';


const samplePost = {
    id: 0,
    title: 'Sample post',
    date: 'Friday, January 26, 2018',
    author: 'Jihyo Kim',
    summary: 'helllllo world!!',
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefininjected humour, or non-characteristic words etc.",
}

const MainPage = () => {
    return (
        <div className='mainPage'>
            <HeaderViewController />
            <SafeArea>
                <PostdetailViewController />
                <Footer />
            </SafeArea>
        </div>
    );
}
export default MainPage;
