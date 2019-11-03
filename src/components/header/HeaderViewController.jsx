import React from 'react';
import HeaderView from './HeaderView.jsx';
import { withRouter } from 'react-router-dom';

class HeaderViewController extends React.Component {
    constructor(props) {
        super(props);
        this.onTabItemClicked = this.onTabItemClicked.bind(this);
    }

    onEnterPressed(value) {
        console.log(value);
    }

    onTabItemClicked(buttonType) {
        switch(buttonType) {
            case "Create":
                this.props.history.push('/edit_post');
                break;
            default:
                console.log("default");
        }
    }

    getTitle() {
        return 'jkim-in-dev';
    }

    render() {
        return (
            <HeaderView 
                title={this.getTitle()}
                onTabItemClicked={this.onTabItemClicked}
                onEnterPressed={this.onEnterPressed}
            />
        );
    }
}

export default withRouter(HeaderViewController);