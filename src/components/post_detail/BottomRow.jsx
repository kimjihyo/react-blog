import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LabelIcon from '@material-ui/icons/Label';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import { makeStyles, Typography } from '@material-ui/core';

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
                    {props.label ? props.label : 'No label'}
                </Typography>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    leftIcon: {
        margin: theme.spacing(0.5),
        fontSize: 15,
    },
    commentSectionRow: {
        padding: '0 2em',
    },
    bottomRow: {
        display: 'flex',
        marginBottom: '1em',
        paddingLeft: '2em',
        paddingRight: '1em',
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

export default BottomRow;