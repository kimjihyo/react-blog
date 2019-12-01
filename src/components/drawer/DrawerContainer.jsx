import React from 'react';
import Drawer from './Drawer.jsx';
import { postObserver } from '../../utils';
import { withRouter } from 'react-router-dom';
import { getRepos } from '../../helpers/GithubHelper';
import { constructDirectoryHierarchy } from '../../handlers/firestoreHandler.js';

class DrawerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            directories: null,
        }

        this.onPostClicked = this.onPostClicked.bind(this);
    }

    componentDidMount() {
        constructDirectoryHierarchy()
        .then(hierarchy => {
            this.setState({
                directories: hierarchy,
            });
        })
    }

    onPostClicked(linkClicked) {
        this.setState({
            currentlyViewedPostId: linkClicked,
        })
    }

    render() {
        return (
            <Drawer
                isOpen={this.props.isOpen}
                onClosed={this.props.onClosed}
                variant={this.props.variant}
                directories={this.state.directories}
            />
        )
    }
}

export const drawerWidth = 340;
export default withRouter(DrawerContainer);