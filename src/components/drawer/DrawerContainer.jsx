import React from 'react';
import Drawer from './Drawer.jsx';
import { withRouter } from 'react-router-dom';
import { getRootDirectory } from '../../handlers/firestoreHandler.js';

class DrawerContainer extends React.Component {
    constructor(props) {
        super(props);
        let currentlyViewedPostId = ""
        let currentRouteInArray = this.props.location.pathname.split("/");
        if (currentRouteInArray.length > 2 && currentRouteInArray[1] === "post_detail") {
            currentlyViewedPostId = currentRouteInArray[2];
        }
        this.state = {
            rootDir: null,
            currentlyViewedPostId: currentlyViewedPostId,
        }
    }

    componentDidMount() {
        getRootDirectory()
        .then(rootDir => {
            this.setState({
                rootDir: rootDir,
            });
        });

        this.onPostClick = this.onPostClick.bind(this);
    }

    onPostClick(postId) {
        this.setState({
            currentlyViewedPostId: postId,
        })
    }

    render() {
        return (
            <Drawer
                isOpen={this.props.isOpen}
                onClosed={this.props.onClosed}
                variant={this.props.variant}
                rootDir={this.state.rootDir}
                currentlyViewedPostId={this.state.currentlyViewedPostId}
                onPostClick={this.onPostClick}
            />
        )
    }
}

export const drawerWidth = 340;
export default withRouter(DrawerContainer);