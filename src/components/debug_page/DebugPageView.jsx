import React from 'react';
import { makeStyles, TextField, Typography, InputLabel } from '@material-ui/core';

const DebugPageView = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography
                variant='h5'
                style={{ marginBottom: '1em' }}
            >
                Blog Hidden Settings
            </Typography>
            <div className={classes.verticalView}>
                <InputLabel>
                    post_body_font_size
                </InputLabel>
                <TextField
                    id="filled-email-input"
                    placeholder="post_body_font_size"
                    margin="dense"
                    hiddenLabel
                    variant="filled"
                    className={classes.textField}
                />
                <InputLabel>
                    post_title_font_size
                </InputLabel>
                <TextField
                    id="filled-email-input"
                    placeholder="post_title_font_size"
                    margin="dense"
                    hiddenLabel
                    variant="filled"
                    className={classes.textField}
                />
                <InputLabel>
                    enable_comments_in_posts
                </InputLabel>
                <TextField
                    id="enable_comments_in_posts"
                    placeholder="enable_comments_in_posts"
                    margin="dense"
                    hiddenLabel
                    variant="filled"
                    className={classes.textField}
                />
                <InputLabel>
                    enable_sub_comments_in_posts
                </InputLabel>
                <TextField
                    id="enable_comments_in_posts"
                    placeholder="enable_sub_comments_in_posts"
                    margin="dense"
                    hiddenLabel
                    variant="filled"
                    className={classes.textField}
                />
                <InputLabel>
                    post_body_font_color
                </InputLabel>
                <TextField
                    id="enable_comments_in_posts"
                    placeholder="post_body_font_color"
                    margin="dense"
                    hiddenLabel
                    variant="filled"
                    className={classes.textField}
                />
                <InputLabel>
                    post_title_font_color
                </InputLabel>
                <TextField
                    id="enable_comments_in_posts"
                    placeholder="post_title_font_color"
                    margin="dense"
                    hiddenLabel
                    variant="filled"
                    className={classes.textField}
                />
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: '1em',
        marginTop: '2em',
    },
    textField: {
        height: '10%',
        marginBottom: '1em',
    },
    verticalView: {
        display: 'flex',
        flexDirection: 'column',
    }
}));

export default DebugPageView;