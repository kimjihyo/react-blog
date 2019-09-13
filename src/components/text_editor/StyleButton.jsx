import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const StyleButton = (props) => {
    const classes = useStyles();
    const onToggle = (e) => {
        props.onToggle(props.text);
    }

    return (
        <span 
            className={classes.styleButton}
            onClick={onToggle}
            style={{
                color: props.clicked ? 'tomato' : 'grey'
            }}
        >
            {props.text}
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
        }
    }
}));

export default StyleButton;