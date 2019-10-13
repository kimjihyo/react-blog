import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Link, List, ListItem, ListItemText, } from '@material-ui/core';


const SearchResultView = (props) => {
    const classes = useStyles();
    return (
        <div
            className={classes.searchResultView}
        >
            <List component="nav" aria-label="secondary mailbox folders">
                {props.postings.map(posting => (
                    <ListItem
                        key={posting.postId}
                        button
                        disableRipple
                    >
                        <Typography
                            variant='caption'
                        >
                            {'[' + posting.title + ']' + ' ' + posting.postId}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    searchResultView: {

    },
    postId: {
    },
    title: {

    }
}));

export default SearchResultView;