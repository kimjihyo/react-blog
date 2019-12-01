import React from 'react';
import { Link, makeStyles, Typography, Grid, } from '@material-ui/core';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import { BLUE_800 } from '../../utils/colors.js';

const TreeView = (props) => {
    const leftMargin = props.leftMargin ? props.leftMargin : 0;
    const [state, setState] = React.useState({
        isExpanded: props.isOpenByDefault ? props.isOpenByDefault : false,
    });
    const classes = useStyles();
    return (
        <div style={{ marginLeft: leftMargin + 'em' }}>
            <div className={classes.preventOverflow}>
                <Grid container direction="row" alignItems="center" className={classes.spacing}>
                    <Grid item>
                        {state.isExpanded &&
                            <div className={classes.leftIcon}>
                                <FolderOpenOutlinedIcon fontSize='small' />
                            </div>
                        }
                        {!state.isExpanded &&
                            <div className={classes.leftIcon}>
                                <FolderOutlinedIcon fontSize='small' />
                            </div>
                        }
                    </Grid>
                    <Grid item>
                        <div className={classes.name}
                            onClick={() => { setState({ isExpanded: !state.isExpanded }) }}>
                            <Typography
                                variant='body2'
                            >
                                {props.directory.name}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {state.isExpanded && props.directory.childDirectories != null && props.directory.childDirectories.length > 0 &&
                props.directory.childDirectories.map(item => {
                    return <TreeView
                        key={item.name}
                        directory={item}
                        leftMargin={leftMargin + 0.5}
                    />
                })
            }
            {state.isExpanded && props.directory.childPosts != null && props.directory.childPosts.length > 0 &&
                props.directory.childPosts.map(item => {
                    console.log(item);
                    return <div
                        key={item}
                        style={{ marginLeft: leftMargin + 0.5 + 'em' }}>
                        <div className={classes.preventOverflow}>
                            <Grid container direction="row" alignItems="center" wrap="nowrap" className={classes.spacing}>
                                <Grid item>
                                    <div className={classes.leftIcon}>
                                        <DescriptionOutlinedIcon fontSize='small' />
                                    </div>
                                </Grid>
                                <Grid item>
                                    <div className={classes.name}>
                                        <Typography variant='body2'>
                                            {item}
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    name: {
        '&:hover': {
            cursor: 'pointer',
            color: 'black',
            textDecoration: 'underline',
        },
        color: BLUE_800,
    },
    leftIcon: {
        marginRight: '1em',
        color: '#607D8B',
    },
    preventOverflow: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginRight: '1em',
    },
    spacing: {
        marginBottom: '.5em',
    }
}));

export default TreeView;
