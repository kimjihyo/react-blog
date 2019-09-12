import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, Link } from '@material-ui/core';

const Footer = () => {
    const footerItems = [
        {
            text: 'Report a bug',
            url: '#',
        },
        {
            text: 'Github',
            url: '#',
        },
        {
            text: 'Linkedin',
            url: '#',
        },
        {
            text: 'Facebook',
            url: '#',
        },
    ];
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.someClass}>
                {footerItems.map(item => (
                    <Link 
                        key={item.text}
                        className={classes.footerItem} 
                        to={item.url}
                    >
                        <Typography variant='caption'>
                            {item.text}
                        </Typography>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'whitesmoke',
        color: '#666666',
        padding: '2em',
        textAlign: 'center',
    },
    someClass: {
        display: 'flex',
        justifyContent: 'center',
    },
    footerItem: {
        marginLeft: '1em',
        color: '#666666',
    }
}));

export default Footer;
