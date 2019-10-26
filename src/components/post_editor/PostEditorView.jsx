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
            <TextField
                label="Page title"
                margin="dense"
                variant="outlined"
                fullWidth
                value={props.title}
                onChange={props.onTitleChanged}
            />
            <div className={classes.topInputRow}>
                <TextField
                    label="Label (Optional)"
                    margin="dense"
                    variant="outlined"
                    value={props.label}
                    onChange={props.onLabelChanged}
                />
                <TextField
                    className={classes.pageDirectory}
                    label="Page directory"
                    variant="outlined"
                    margin="dense"
                    value={props.directory}
                    onChange={props.onDirectoryChanged}
                />
            </div>
            <div
                className={classes.postSettingsRow}
            >
                <FormGroup row>
                    <FormControlLabel
                        className={classes.inputLabel}
                        control={
                            <Switch
                                checked={state.isCommentsEnabled}
                                onChange={handleChange('isCommentsEnabled')}
                                value="isCommentsEnabled"
                                color="primary"
                            />
                        }
                        label={
                            <Typography
                                variant='caption'
                                className={classes.label}
                            >
                                Enable Comments
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        className={classes.inputLabel}
                        control={
                            <Switch
                                checked={state.isVisibleToPublic}
                                onChange={handleChange('isVisibleToPublic')}
                                value="isVisibleToPublic"
                                color="primary"
                            />
                        }
                        label={
                            <Typography
                                variant='caption'
                                className={classes.label}
                            >
                                Visible to Public
                            </Typography>
                        }
                    />
                </FormGroup>
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
    pageDirectory: {
        flex: 2,
        marginLeft: '1em',
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
