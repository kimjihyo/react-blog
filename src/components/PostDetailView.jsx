import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography, Breadcrumbs, Link, Button,
    IconButton, Hidden, Paper, MenuItem,
    ClickAwayListener, Grow, Popper, MenuList,
    Divider
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarIcon from '@material-ui/icons/StarBorder';

import CommentSection from './CommentSection.jsx';


const PostDetailView = (props) => {
    const classes = useStyles();
    const anchorRef = React.useRef(null);
    const [moreDropDownOpen, setMoreDropDownOpen] = React.useState(false);
    const moreDropDownContents = ['Page History', 'Page Information', 'Import Word Document', 'Divider', 'Copy', 'Move'];
    const topUtilRowButtons = [
        { text: 'Edit', icon: (<EditIcon className={classes.leftIcon} />) },
        { text: 'Save for later', icon: (<StarIcon className={classes.leftIcon} />) },
        { text: 'Share', icon: (<ShareIcon className={classes.leftIcon} />) }
    ];

    const onMoreButtonClicked = (e) => {
        setMoreDropDownOpen(prevOpen => !prevOpen);
    }

    const onMoreDropDownClosed = (e) => {
        if (anchorRef.current && anchorRef.current.contains(e.target)) {
            return;
        }

        setMoreDropDownOpen(false);
    }

    return (
        <div className={classes.root}>
            <div className={classes.topUtilRow}>
                <Breadcrumbs maxItems={3} aria-label='breadcrumb' className={classes.breadcrumbs}>
                    <Link color="primary" href="#" onClick={onNavLinkClicked}>
                        Home
                    </Link>
                    <Link color="primary" href="#" onClick={onNavLinkClicked}>
                        Catalog
                    </Link>
                    <Link color="primary" href="#" onClick={onNavLinkClicked}>
                        Accessories
                    </Link>
                    <Link color="primary" href="#" onClick={onNavLinkClicked}>
                        Data Engineering
                    </Link>
                </Breadcrumbs>
                <Typography className={classes.viewCol}>
                </Typography>
                <span className={classes.topUtilRowButtons}>
                    <Hidden smDown>
                        {topUtilRowButtons.map(item => (
                            <Button
                                key={'topUtilRowButtons-' + item}
                                disableRipple
                                className={classes.buttons}
                            >
                                {item.icon}
                                {item.text}
                            </Button>
                        ))}
                    </Hidden>
                    <IconButton
                        ref={anchorRef}
                        onClick={onMoreButtonClicked}
                        disableRipple
                        className={classes.buttons}>
                        <MoreHorizIcon />
                    </IconButton>
                    <Popper open={moreDropDownOpen} anchorEl={anchorRef.current} transition>
                        <Paper>
                            <ClickAwayListener onClickAway={onMoreDropDownClosed}>
                                <MenuList className={classes.moreDropDown}>
                                    <Hidden mdUp>
                                        {topUtilRowButtons.map(item => (
                                            <MenuItem
                                                key={item.text + 'topUitlRowButtons-dropDown'}
                                                disableRipple
                                            >
                                                <Typography variant='body2'>
                                                    {item.text}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                        <Divider />
                                    </Hidden>
                                    {moreDropDownContents.map(item => {
                                        if (item === 'Divider') {
                                            return <Divider key={'divider' + moreDropDownContents.indexOf(item)} />
                                        }
                                        return (
                                            <MenuItem
                                                key={item + 'moreDropDownContents'}
                                                disableRipple
                                            >
                                                <Typography variant='body2'>
                                                    {item}
                                                </Typography>
                                            </MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Popper>
                </span>
            </div>
            <div className={classes.content}>
                <Typography variant='h5'>
                    {props.post.title}
                </Typography>
                <Typography variant='caption' className={classes.date}>
                    Created by {props.post.author} on {props.post.date}
                </Typography>
                <p className={classes.body}>
                    {/* {props.post.body} */}
                </p>
                <CommentSection />
            </div>
        </div>
    );
}

const onNavLinkClicked = () => {
    console.log('clicked');
}

const useStyles = makeStyles(theme => ({
    root: {
        marginRight: 'auto',
    },
    date: {
        color: 'grey'
    },
    body: {
        marginTop: '1em',
    },
    topUtilRow: {
        marginBottom: '0.5em',
        display: 'flex',
        paddingLeft: '2em',
        paddingRight: '1em',
    },
    breadcrumbs: {
        lineHeight: '3',
        marginRight: '1em',
    },
    viewCol: {
        lineHeight: '3',
        color: 'grey',
    },
    topUtilRowButtons: {
        display: 'flex',
        marginLeft: 'auto',
    },
    content: {
        padding: '0 2em',
        marginBottom: '1em',
    },
    leftIcon: {
        margin: theme.spacing(0.5),
        fontSize: 20,
    },
    buttons: {
        textTransform: 'none',
        fontWeight: '400',
        color: '#525252',
    },
    moreDropDown: {
        boxShadow: '1px 1px 2px #b8b8b8'
    }
}));

PostDetailView.prototype = {
    post: PropTypes.object.isRequired,
}

export default PostDetailView;
