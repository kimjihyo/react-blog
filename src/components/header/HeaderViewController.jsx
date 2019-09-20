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

    getTitle() {
        return 'jkim';
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

export default HeaderViewController;