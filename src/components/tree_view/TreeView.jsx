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
                                {props.name}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {state.isExpanded && props.subTree.length > 0 &&
                props.subTree.map(item => {
                    if (item.isFolder) {
                        return <TreeView
                            key={item.name}
                            name={item.name}
                            leftMargin={leftMargin + 0.5}
                            isFolder={item.isFolder}
                            subTree={item.subTree}
                        />
                    } else {
                        return <div
                            key={item.name}
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
                                                {item.name}
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    }
                })
            }
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    name: {
        '&:hover': {
            cursor: 'pointer',
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
