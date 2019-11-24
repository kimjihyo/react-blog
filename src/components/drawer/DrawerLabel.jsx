import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { BLUE_GREY_800 } from '../../utils/colors.js';

const DrawerLabel = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='caption' className={classes.drawerLabel}>
                {props.children}
            </Typography>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: '1em',
        marginBottom: '.5em',
    },
    drawerLabel: {
        fontWeight: 'bold',
        color: BLUE_GREY_800,
    }
}));

export default DrawerLabel;