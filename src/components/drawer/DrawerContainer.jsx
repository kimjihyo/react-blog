import React from 'react';
import Drawer from './Drawer.jsx';
import { postObserver } from '../../utils';
import { withRouter } from 'react-router-dom';
import { getRepos } from '../../helpers/GithubHelper';

class DrawerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            repos: [],
            currentlyViewedPostId: '',
        }

        this.onPostClicked = this.onPostClicked.bind(this);
    }

    componentDidMount() {
        postObserver(posts => {
            this.setState({
                posts: posts,
            })
        }, error => {
            console.log(error);
        });

        getRepos(repos => {
            this.setState({
                repos: repos,
            })
        });

        let paths = this.props.location.pathname.split('/');

        if (paths.length >= 3) {
            this.setState({
                currentlyViewedPostId: paths[2],
            })
        }
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
                items={this.props.items}
                posts={this.state.posts}
                repos={this.state.repos}
                currentlyViewedPostId={this.state.currentlyViewedPostId}
                onPostClicked={this.onPostClicked}
            />
        )
    }
}

export const drawerWidth = 340;
export default withRouter(DrawerContainer);