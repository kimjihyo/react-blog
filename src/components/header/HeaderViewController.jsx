import React from 'react';
import HeaderView from './HeaderView.jsx';

class HeaderViewController extends React.Component {
    constructor(props) {
        super(props);
    }

    onEnterPressed(value) {
        console.log(value);
    }

    onTabItemClicked(buttonType) {
        console.log(buttonType);
    }

    render() {
        return (
            <HeaderView 
                onTabItemClicked={this.onTabItemClicked}
                onEnterPressed={this.onEnterPressed}
            />
        );
    }
}

export default HeaderViewController;