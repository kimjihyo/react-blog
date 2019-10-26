import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const ListWithTopLabel = (props) => {
    const classes = useStyles();

    return (
        <div>
            <div
                className={classes.drawerLabel}
            >
                <Typography
                    variant='body2'
                    className={classes.bold}
                >
                    {props.label}
                </Typography>
            </div>
            <ul
                className={classes.unorderedList}
            >
                {props.items.map((item, index) => (
                    <li
                        key={props.label + '-' + index}
                        className={classes.listItem}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 'bold',
    },
    unorderedList: {
        marginLeft: '2em',
    },
    drawerLabel: {
        color: 'grey',
        marginBottom: '.5em',
        marginLeft: '1em',
    },
    listItem: {
        marginBottom: '8px',
    }
}));

export default ListWithTopLabel;