import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import {Editor, EditorState, RichUtils} from 'draft-js';


const CommentSection = () => {
    const classes = useStyles();
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
    const onChange = (s) => setEditorState(s);
    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    return (
        <div>
            <h1>Comment Section</h1>
            <div className={classes.textEditor}>
                
            </div>
            <Editor 
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                onChange={onChange}
            />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    commentTextField: {
        backgroundColor: 'whitesmoke',
    }
}));

export default CommentSection;