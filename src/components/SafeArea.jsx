import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './Drawer.jsx';

const SafeArea = (props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.safeArea}>
            {props.children}
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    safeArea: {
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
        },
        marginTop: '3em',
    }
}));

export default SafeArea;