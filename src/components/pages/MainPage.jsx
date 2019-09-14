import React from 'react';
import Header from '../Header.jsx';
import Posts from '../Posts.jsx';
import PostMiniCard from '../PostMiniCard.jsx';
import PostDetailView from '../PostDetailView.jsx';
import Footer from '../Footer.jsx';
import SafeArea from '../SafeArea.jsx';


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
            <Header />
            <SafeArea>
                <PostDetailView post={samplePost}/>
                <Footer />
            </SafeArea>
        </div>
    );
}
export default MainPage;
