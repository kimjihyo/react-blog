import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Breadcrumbs, Link, Button, IconButton, Hidden } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarIcon from '@material-ui/icons/StarBorder';


const PostDetailView = (props) => {
    const classes = useStyles();
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
                <span className={classes.topUtilRowButtons}>
                    <Hidden smDown>
                        <Button disableRipple className={classes.buttons}>
                            <EditIcon className={classes.leftIcon} />
                            Edit
                        </Button>
                        <Button disableRipple className={classes.buttons}>
                            <StarIcon className={classes.leftIcon} />
                            Save for later
                        </Button>
                        <Button disableRipple className={classes.buttons}>
                            <ShareIcon className={classes.leftIcon}/>
                            Share
                        </Button>
                    </Hidden>
                    <IconButton disableRipple className={classes.buttons}>
                        <MoreHorizIcon />
                    </IconButton>
                </span>
            </div>
            <div className={classes.content}>
                <Typography variant='h5'>
                    {props.post.title}
                </Typography>
                <Typography variant='subtitle1' className={classes.date}>
                    {props.post.date}
                </Typography>
                <p className={classes.body}>
                    {props.post.body}
                </p>
                <div className={classes.commentArea}>

                </div>
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
        maxWidth: '55em',
        marginTop: '1em',
    },
    topUtilRow: {
        marginBottom: '2em',
        display: 'flex',
        paddingLeft: '2em',
        // borderBottom: '1px #dbdbdb solid',
    },
    breadcrumbs: {
        marginRight: 'auto',
        lineHeight: '3'
    },
    topUtilRowButtons: {
        display: 'flex',
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
    }
}));

PostDetailView.prototype = {
    post: PropTypes.object.isRequired,
}

export default PostDetailView;
