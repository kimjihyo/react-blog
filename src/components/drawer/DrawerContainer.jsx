import React from 'react';
import Drawer from './Drawer.jsx';
import { postObserver } from '../../utils';
import { withRouter } from 'react-router-dom'

class DrawerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentlyViewedPostId: '',
        }

        this.onPostClicked = this.onPostClicked.bind(this);
    }

    componentDidMount() {
        postObserver(posts => {
            this.setState({
                posts:posts,
            })
        }, error => {
            console.log(error);
        });
        console.log(this.props.location.pathname);
        console.log(this.props.location.pathname.split('/')[2]);
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
        console.log(linkClicked);
    }

    render() {
        return (
            <Drawer 
                isOpen={this.props.isOpen}
                onClosed={this.props.onClosed}
                variant={this.props.variant}
                items={this.props.items}
                posts={this.state.posts}
                currentlyViewedPostId={this.state.currentlyViewedPostId}
                onPostClicked={this.onPostClicked}
            />
        )
    }
}

export const drawerWidth = 340;
export default withRouter(DrawerContainer);