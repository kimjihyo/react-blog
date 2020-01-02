import React from 'react';
import {
    makeStyles, TextField, Typography, InputLabel, Select,
    FormControl, MenuItem, Switch, FormGroup, FormControlLabel, Button
} from '@material-ui/core';
import RichTextEditor from '../text_editor/RichTextEditor.jsx';

const PostEditorView = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        isCommentsEnabled: true,
        isVisibleToPublic: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };
    return (
        <div className={classes.root}>
            <div className={classes.topInputRow}>
                <TextField
                    className={classes.pageTitle}
                    label="Page title"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    value={props.title}
                    onChange={props.onTitleChanged}
                />
            </div>
            <RichTextEditor
                for={'post-editor'}
                placeholder={"What's on your mind?"}
                onCancel={props.onCancel}
                onSave={props.onSave}
                isBlockStyleEnabled={true}
                value={props.body}
            />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0em 1em',
        marginTop: '4em',
    },
    topInputRow: {
        display: 'flex',
    },
    postSettingsRow: {
        display: 'flex',
        flexDirection: 'column',
    },
    settingRowItem: {
        display: 'flex',
        marginBottom: '1em',
    },
    inputLabel: {
        fontSize: '14px',
    },
    label: {
        color: 'grey',
    }
}));

export default PostEditorView;
