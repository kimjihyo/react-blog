import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography, Breadcrumbs, Link, Button,
    IconButton, Hidden, Paper, MenuItem,
    ClickAwayListener, Popper, MenuList,
    Divider
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarIcon from '@material-ui/icons/StarBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LabelIcon from '@material-ui/icons/Label';
import EyeIcon from '@material-ui/icons/RemoveRedEye';

import RichTextEditorDisplayer from '../text_editor/RichTextEditorDisplayer.jsx';
import CommentSectionViewController from '../comment/CommentSectionViewController.jsx';

const PostDetailView = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopUtilRow
                paths={props.paths}
                onNavLinkClicked={props.onNavLinkClicked}
                onButtonsClicked={props.onButtonsClicked}
            />
            <div className={classes.content}>
                <Typography
                    variant='h5'
                >
                    {props.post.title}
                </Typography>
                <Typography
                    variant='caption'
                    className={classes.date}
                >
                    Created by {props.post.author} on {props.post.date}
                </Typography>
                <div
                    className={classes.body}
                >
                    <RichTextEditorDisplayer
                        content={props.post.body}
                    />
                </div>
            </div>
            <BottomRow />
            <div className={classes.commentSectionRow}>
                <CommentSectionViewController />
            </div>
        </div>
    );
}

const TopUtilRow = (props) => {
    const classes = useStyles();
    const anchorRef = React.useRef(null);
    const [moreDropDownOpen, setMoreDropDownOpen] = React.useState(false);

    const moreDropDownContents = [
        'Page History',
        'Page Information',
        'Import Word Document',
        'Divider',
        'Copy',
        'Move',
    ];

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
        <div className={classes.topUtilRow}>
            <Breadcrumbs 
                maxItems={3} 
                aria-label='breadcrumb' 
                className={classes.breadcrumbs}
            >
                {props.paths.map(path => (
                    <Link
                        key={'link' + path}
                        color="primary"
                        href="#"
                        onClick={() => props.onNavLinkClicked(path)}
                    >
                        {path}
                    </Link>
                ))}
            </Breadcrumbs>
            
            <span className={classes.topUtilRowButtons}>
                <Hidden smDown>
                    {topUtilRowButtons.map(item => (
                        <Button
                            key={'topUtilRowButtons-' + item.text}
                            disableRipple
                            className={classes.buttons}
                            onClick={() => props.onButtonsClicked(item.text)}
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
                                            key={'topUitlRowButtons-DropDown-' + item.text}
                                            onClick={() => props.onButtonsClicked(item.text)}
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
                                        return <Divider key={'divider-' + moreDropDownContents.indexOf(item)} />
                                    }
                                    return (
                                        <MenuItem
                                            key={'moreDropDownContents-' + item}
                                            onClick={() => props.onButtonsClicked(item)}
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
    );
}

const BottomRow = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.bottomRow}>
            <div
                className={classes.likeButtonInBottomRow}
            >
                <ThumbUpIcon 
                    className={classes.leftIcon}
                />
                <Typography
                    variant='caption'
                >
                    Like
                </Typography>
            </div>
            <div
                className={classes.likeButtonLabel}
            >
                <Typography
                    variant='caption'
                >
                    Be the first to like this
                </Typography>
            </div>
            <div
                className={classes.viewColumnInBottomRow}
            >
                <EyeIcon 
                    className={classes.leftIcon}
                />
                <Typography
                    variant='caption'
                >
                    116 view(s)
                </Typography>
            </div>
            <div
                className={classes.labelColumnInBottonRow}
            >
                <LabelIcon 
                    className={classes.leftIcon}
                />
                <Typography
                    variant='caption'
                >
                    No labels
                </Typography>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
    },
    date: {
        color: 'grey'
    },
    body: {
        marginTop: '1em',
        marginBottom: '3em',
        lineHeight: 2,
        fontSize: '14px',
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
        fontSize: 15,
    },
    buttons: {
        textTransform: 'none',
        fontWeight: '400',
        color: '#525252',
    },
    moreDropDown: {
        boxShadow: '1px 1px 2px #b8b8b8'
    },
    commentSectionRow: {
        padding: '0 2em',
    },
    bottomRow: {
        display: 'flex',
        marginBottom: '1em',
        paddingLeft: '2em',
        paddingRight: '1em',
        // backgroundColor: 'tomato',
    },
    viewColumnInBottomRow: {
        color: '#525252',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '1em',
    },
    labelColumnInBottonRow: {
        display: 'flex',
        color: '#525252',
        marginLeft: 'auto',
        marginRight: '1em',
        justifyContent: 'center',
        alignItems: 'center',
    },
    likeButtonLabel: {
        color: '#525252',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '1em',
    },
    likeButtonInBottomRow: {
        color: '#525252',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

PostDetailView.prototype = {
    post: PropTypes.object.isRequired,
}

export default PostDetailView;
