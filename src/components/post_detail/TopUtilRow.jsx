import React from 'react';
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
        'Delete',
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

const useStyles = makeStyles(theme => ({
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
}));


export default TopUtilRow;

