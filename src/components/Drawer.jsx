import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as MaterialDrawer, List, ListItem, ListItemText, makeStyles, Hidden, Divider } from '@material-ui/core';
import { tabItems } from './Header.jsx';

// Drawer Items
const drawerItems = ['Archive', 'Lables'];

const Drawer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MaterialDrawer
                open={props.isOpen}
                onClose={props.onClosed}
                classes={{ paper: classes.drawer }}
                variant={props.variant}
            >
                <List>
                    <Hidden smUp>
                        {tabItems.map(item => (
                            <ListItem button key={item}>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                        <Divider />
                    </Hidden>
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
        [theme.breakpoints.up('md')]: {
            paddingTop: '3em',
        }
    }
}));

export const drawerWidth = 260;
export default Drawer;
