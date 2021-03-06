import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as MaterialDrawer, List, ListItem, ListItemText, makeStyles, Hidden, Divider, Link, Typography, ListItemIcon, Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import DrawerLabel from './DrawerLabel.jsx';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { FolderTreeViewContainer } from '../tree_view'
import { BLUE_GREY, BLUE_GREY_800, BLUE_GREY_900, INDIGO, INDIGO_800, BLUE_800 } from '../../utils/colors.js';

const demoViews = [
    {
        viewName: 'Post Detail View',
        to: '/',
    },
    {
        viewName: 'Post List View',
        to: '/',
    },
    {
        viewName: 'Post Editor View',
        to: '/edit_post',
    },
    {
        viewName: 'Search Result View',
        to: '/',
    },
    {
        viewName: 'Debug View',
        to: '/debug_page',
    },
];

const pageShortcuts = [
    {
        viewName: 'About Me',
        to: '/',
    },
    {
        viewName: 'Product Requirements',
        to: '/',
    },
    {
        viewName: 'How-to articles',
        to: '/edit_post',
    },
    {
        viewName: 'Retrpspectives',
        to: '/',
    },
    {
        viewName: 'Troubleshooting articles',
        to: '/debug_page',
    },
]

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
                <div
                    className={classes.drawerContent}
                >
                    <List dense={true}>
                        <DrawerLabel>SPACE SHORTCUTS</DrawerLabel>
                        {pageShortcuts.map(item => (
                            <ListItem key={item.viewName} disableRipple={true} button className={classes.spaceShortCutItems}>
                                <Grid container direction="row" alignItems="center" wrap="nowrap">
                                    <Grid item>
                                        <div className={classes.leftIcon}>
                                            <DescriptionOutlinedIcon fontSize='small' />
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>
                                            {item.viewName}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        ))}
                    </List>
                    <Divider className={classes.divider} />
                    <DrawerLabel>PAGES</DrawerLabel>
                    <div className={classes.treeViews}>
                        {props.rootDir != null &&
                            <FolderTreeViewContainer
                                directoryId={props.rootDir.id}
                                name={props.rootDir.name}
                                isOpenByDefault={props.rootDir.isOpenByDefault}
                                childDirectories={props.rootDir.childDirectories}
                                childPosts={props.rootDir.childPosts}
                                postIdToBeBolded={props.currentlyViewedPostId}
                                onPostClick={props.onPostClick}
                            />
                        }
                    </div>
                </div>
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
        backgroundColor: '#fcfcfc',
        [theme.breakpoints.up('md')]: {
            paddingTop: '3em',
        },
    },
    drawerContent: {
        marginBottom: '5em',
    },
    drawerLabel: {
        marginBottom: '1em',
    },
    divider: {
        marginBottom: '1em',
    },
    spaceShortCutItems: {
        color: BLUE_800,
    },
    treeViews: {
        marginLeft: '1em',
    },
    leftIcon: {
        marginRight: '1em',
        color: BLUE_GREY
    },
}));

export const drawerWidth = 340;
export default Drawer;
