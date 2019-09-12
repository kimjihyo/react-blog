import React from 'react';

const StyleButton = (props) => {
    const onToggle = (e) => {
        e.preventDefault();
        props.onToggle();
    }
}

export default StyleButton;