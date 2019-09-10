import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>Designed by Jihyo Kim with Material UI</h3>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#141414',
        color: 'white',
        padding: '2em',
        textAlign: 'center',
    }
}));

export default Footer;
