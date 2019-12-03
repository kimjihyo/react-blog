import React from 'react';
import { makeStyles, Typography, Grid, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import { BLUE_800, INDIGO_800 } from '../../utils/colors.js';
import FolderTreeViewContainer from './FolderTreeViewContainer.jsx';

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
                            onClick={() => {
                                setState({ isExpanded: !state.isExpanded });
                            }}>
                            <Typography
                                variant='body2'
                            >
                                {props.name}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {state.isExpanded && props.childDirectories != null && props.childDirectories.length > 0 &&
                props.childDirectories.map(item => {
                    return <FolderTreeViewContainer
                        key={item.name}
                        name={item.name}
                        childDirectories={item.childDirectories}
                        childPosts={item.childPosts}
                        isOpenByDefault={item.isOpenByDefault}
                        leftMargin={leftMargin + 0.5}
                        postIdToBeBolded={props.postIdToBeBolded}
                        onPostClick={props.onPostClick}
                    />
                })
            }
            {state.isExpanded && props.childPosts != null && props.childPosts.length > 0 &&
                props.childPosts.map(item => {
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
                                    <Link to={'/post_detail/' + item.id}>
                                        <div className={classes.name} onClick={() => props.onPostClick(item.id)}>
                                            {props.postIdToBeBolded != null && props.postIdToBeBolded === item.id &&
                                                <Typography variant='body2' className={classes.bold}>
                                                    {item.title}
                                                </Typography>
                                            }
                                            {props.postIdToBeBolded == null || props.postIdToBeBolded !== item.id &&
                                                <Typography variant='body2'>
                                                    {item.title}
                                                </Typography>
                                            }
                                        </div>
                                    </Link>
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
    },
    bold: {
        fontWeight: "bold",
        color: INDIGO_800,
    }
}));

export default TreeView;
