import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const StyleButton = (props) => {
    const classes = useStyles();
    const onToggle = (e) => {
        e.preventDefault();
        props.onToggle(props.style);
    }

    return (
        <span 
            className={`${classes.styleButton} disableSelection`}
            onMouseDown={onToggle}
            style={{
                color: props.active ? '#3F51B5' : 'grey'
            }}
        >
            {props.label}
        </span>
    );
}

const useStyles = makeStyles(theme => ({
    styleButton: {
        color: 'grey',
        margin: '0 0.5em',
        fontSize: '14px',
        '&:hover': {
            cursor: 'pointer',
        },
    }
}));

export default StyleButton;