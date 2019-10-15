import React from 'react';
import Footer from '../Footer.jsx';
import SafeArea from '../SafeArea.jsx';
import HeaderViewController from '../header/HeaderViewController.jsx';

const Page = (props) => {
    return (
        <div className='mainPage'>
            <HeaderViewController />
            <SafeArea>
                <React.Fragment>
                    { props.children }
                    <Footer />
                </React.Fragment>
            </SafeArea>
        </div>
    );
}
export default Page;
