import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as MaterialDrawer, List, ListItem, ListItemText, makeStyles, Hidden, Divider } from '@material-ui/core';

// Drawer Items
// const drawerItems = ['Archive', 'Lables'];

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
                    {props.items.map(item => {
                        if (item === 'Divider') {
                            return <Divider key='divider' />
                        }

                        return ((
                            <ListItem button key={item + '-drawer'}>
                                <ListItemText primary={item} />
                            </ListItem>
                        ));
                    })}
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

export const drawerWidth = 240;
export default Drawer;
