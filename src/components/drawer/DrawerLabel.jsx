import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const DrawerLabel = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='body2' className={classes.drawerLabel}>
                {props.children}
            </Typography>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: '1em',
    },
    drawerLabel: {
        fontWeight: 'bold',
        color: '#7c8591',
    }
}));

export default DrawerLabel;