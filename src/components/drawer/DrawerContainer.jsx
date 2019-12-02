import React from 'react';
import Drawer from './Drawer.jsx';
import { postObserver } from '../../utils';
import { withRouter } from 'react-router-dom';
import { getRepos } from '../../helpers/GithubHelper';
import { constructDirectoryHierarchy, getRootDirectory } from '../../handlers/firestoreHandler.js';

class DrawerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rootDir: null,
        }

        this.onPostClicked = this.onPostClicked.bind(this);
    }

    componentDidMount() {
        getRootDirectory()
        .then(rootDir => {
            console.log(rootDir);
            this.setState({
                rootDir: rootDir,
            })
        });
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
                rootDir={this.state.rootDir}
            />
        )
    }
}

export const drawerWidth = 340;
export default withRouter(DrawerContainer);