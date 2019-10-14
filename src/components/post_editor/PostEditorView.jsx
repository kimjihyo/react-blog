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
                placeholder="Page title"
                margin="normal"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={props.onTitleChanged}
            />
            <div className={classes.topInputRow}>
                <TextField
                    placeholder="Label (Optional)"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={props.onLabelChanged}
                />
                <TextField
                    className={classes.pageDirectory}
                    placeholder="Page directory"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
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
                                variant='body2'
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
                                variant='body2'
                            >
                                Visible to Public
                            </Typography>
                        }
                    />
                    <Button
                        size='small'
                        variant='outlined'
                        disableRipple
                    >
                        LOAD A SAMPLE POST
                    </Button>
                </FormGroup>
            </div>
            <RichTextEditor
                for={'post-editor'}
                placeholder={"What's on your mind?"}
                onCancel={props.onCancel}
                onSave={props.onSave}
                isBlockStyleEnabled={true}
            />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0em 1em',
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
    }
}));

export default PostEditorView;
