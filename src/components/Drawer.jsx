import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as MaterialDrawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

// Drawer Items
const ARCHIVE = 'Archive';
const LABLES = 'Lables';
const SIGN_IN = 'Sign In';
const drawerItems = [ARCHIVE, LABLES, SIGN_IN];

const Drawer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MaterialDrawer 
                open={props.isOpen}
                onClose={props.onClosed}
                classes={{paper: classes.drawer}}
                variant={props.variant}
            >
                <List>
                    {drawerItems.map(item => (
                        <ListItem button key={item}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </MaterialDrawer>
        </div>
    );
};

Drawer.prototype = {
    isOpen: PropTypes.bool.isRequired,
    onClosed: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired,
}

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        backgroundColor: 'whitesmoke',
        paddingTop: '3em',
    }
}));

export const drawerWidth = 300;
export default Drawer;
