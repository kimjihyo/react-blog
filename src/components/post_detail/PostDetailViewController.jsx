import React from 'react';
import PostDetailView from './PostDetailView.jsx';

const samplePost = {
    id: 0,
    title: `'Netanyahu has lost, but Gantz hasn't won': Exit polls indicate Israeli election too close to call`,
    date: 'Friday, January 26, 2018',
    author: 'Jihyo Kim',
    summary: 'helllllo world!!',
    body: {"blocks":[{"key":"dpnu3","text":"Revised surveys, several hours after polls closed, by Israeli TV stations gave Likud 30 to 33 of parliament’s 120 seats, a slight drop from earlier forecasts, versus 32 to 34 for Blue and White.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":194,"style":"BOLD"},{"offset":0,"length":194,"style":"ITALIC"},{"offset":0,"length":194,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"9097p","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ff748","text":"Neither had enough support, at first glance, for a governing coalition of 61 legislators, and Netanyahu’s ally-turned-rival, former Defence Minister Avigdor Lieberman, emerged as a likely kingmaker as head of the far-right Yisrael Beitenu party.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":125,"length":41,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"17anr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4tr30","text":"“Netanyahu has lost, but Gantz hasn’t won,” said Udi Segal, a prominent Israeli television news anchor.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3k968","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"676u7","text":"The revised polls showed that without Yisrael Beitenu’s projected eight to nine seats, stalemate could ensue: Likud would have the support of only up to 55 legislators, down from 57 in the earlier exit polls, for a right-wing coalition. Blue and White could enlist the backing of no more than 59 for a center-left government.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":173,"length":45,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"1vlku","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5rakq","text":"“We have only one option – a national, liberal, broad government comprising Israel Beitenu, Likud and Blue and White,” said Lieberman, whose projected tally was double the result in April.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":157,"length":31,"style":"UNDERLINE"}],"entityRanges":[],"data":{}}],"entityMap":{}}
}

class PostDetailViewController extends React.Component {
    constructor(props) {
        super(props);
    }

    onNavLinkClicked(link) {
        console.log(link);
    }

    onTopUtilRowButtonClicked(buttonType) {
        console.log(buttonType);
    }

    onMoreDropDownContentClicked(buttonType) {
        console.log(buttonType);
    }

    getPaths() {
        return ['Link', 'Link', 'Link', 'Link'];
    }

    getPost() {
        return samplePost;
    }

    render() {
        return (
            <PostDetailView
                post={this.getPost()}
                paths={this.getPaths()}
                onNavLinkClicked={this.onNavLinkClicked}
                onTopUtilRowButtonClicked={this.onTopUtilRowButtonClicked}
                onMoreDropDownContentClicked={this.onMoreDropDownContentClicked}
            />
        );
    }
}

export default PostDetailViewController;