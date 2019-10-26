import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Editor, EditorState, convertFromRaw } from "draft-js";

const RichTextEditorDisplayer = (props) => {
    const classes = useStyles();
    const contentState = convertFromRaw(props.content);
    const editorState = EditorState.createWithContent(contentState);


    return (
        <div className={classes.richTextEditorDisplayer}>
            <Editor
                editorState={editorState}
                readOnly={true}
            />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    richTextEditorDisplayer: {
        lineHeight: 2,
        fontSize: '15px',
        color: '#222e42'
    }
}));

export default RichTextEditorDisplayer;