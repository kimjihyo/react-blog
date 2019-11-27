import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as MaterialDrawer, List, ListItem, ListItemText, makeStyles, Hidden, Divider, Link, Typography, ListItemIcon, Grid } from '@material-ui/core';
import { Link as RouteLink } from 'react-router-dom';
import DrawerLabel from './DrawerLabel.jsx';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import TreeView from '../tree_view'
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
                        <TreeView name={'Home'} isOpenByDefault={true} isFolder={true} subTree={
                            [
                                {
                                    name: 'Test Posts', isFolder: true, subTree: [
                                        {
                                            name: 'Aborting a build', isFolder: false
                                        },
                                        {
                                            name: 'Acess Logging', isFolder: false
                                        },
                                        {
                                            name: 'Building a software project', isFolder: false
                                        },
                                        {
                                            name: 'Dristributed development', isFolder: false
                                        },
                                        {
                                            name: 'Sub Folder 2', isFolder: true, subTree: [
                                                {
                                                    name: 'How to File a Patch', isFolder: false
                                                },
                                                {
                                                    name: 'Groovy Hook Script', isFolder: false
                                                },
                                            ],
                                        }
                                    ],
                                },
                                {
                                    name: 'Sub Folder 3', isFolder: true, subTree: [
                                        {
                                            name: 'FreeBSD', isFolder: false
                                        },
                                        {
                                            name: 'Drupal Development', isFolder: false
                                        },
                                        {
                                            name: 'Perl Projects', isFolder: false
                                        },
                                        {
                                            name: 'Process Tree Killer', isFolder: false
                                        },
                                        {
                                            name: 'Jihyo Kim Blog', isFolder: false
                                        },
                                        {
                                            name: 'New documents show contacts between Giuliani and Pompeo', isFolder: false
                                        },
                                    ],
                                },
                                {
                                    name: 'Test Posts 2', isFolder: true, subTree: [
                                        {
                                            name: 'Launching agent from console', isFolder: false
                                        },
                                        {
                                            name: 'Net Beans Plugin', isFolder: false
                                        },
                                        {
                                            name: 'Windows agent fail to start via ssh', isFolder: false
                                        },
                                        {
                                            name: 'Shells', isFolder: false
                                        },
                                        {
                                            name: 'Sub Folder 2', isFolder: true, subTree: [
                                                {
                                                    name: 'Running Jenkins with native SSL / HTTPS', isFolder: false
                                                },
                                                {
                                                    name: 'Friends: 5 Best Things Joey Did For Chandler (& 5 Chandler Did For Joey)', isFolder: false
                                                },
                                            ],
                                        }
                                    ],
                                },
                                {
                                    name: 'FreeBSD', isFolder: false
                                },
                                {
                                    name: 'Drupal Development', isFolder: false
                                },
                                {
                                    name: 'Perl Projects', isFolder: false
                                },
                                {
                                    name: 'Process Tree Killer', isFolder: false
                                },
                                {
                                    name: 'Jihyo Kim Blog', isFolder: false
                                },
                            ]
                        } />
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
