import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
import StyleButton from './StyleButton.jsx';
import { Editor, EditorState, RichUtils } from 'draft-js';

const RichTextEditor = () => {
    const classes = useStylesForRichTextEditor();
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
    const onChange = (editorState) => setEditorState(editorState);
    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    return (
        <Paper className={classes.richTextEditor}>
            <BlockStyleController />
            <InlineStyleController />
            <Divider className={classes.divider} />
            <div className={classes.editorTextField}>
                <Editor 
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange}
                    placeholder='Please tell us a story'
                />
            </div>
        </Paper>
    );
}

const blockStyleControllers = [
    'H1', 'H2', 'H3', 'H4',
    'H5', 'H6', 'Blockquote', 'UL',
    'OL', 'Code block'
];

const BlockStyleController = () => {
    const classes = useStylesForBlockStyleController();
    return (
        <div className={classes.blockStyleController}>
            {blockStyleControllers.map(item => (
                <StyleButton text={item} clicked={false} onToggle={(text) => { console.log(text) }} />
            ))}
        </div>
    );
}

const inlineStyleControllers = [
    'Bold', 'Italic', 'Underline', 'Monospace'
]

const InlineStyleController = () => {
    const classes = useStylesForInlineStyleController();
    return (
        <div className={classes.blockStyleController}>
            {inlineStyleControllers.map(item => (
                <StyleButton text={item} clicked={false} onToggle={(text) => { console.log(text) }} />
            ))}
        </div>
    );
}

const useStylesForRichTextEditor = makeStyles(theme => ({
    richTextEditor: {
        outline: '1px solid #e3e3e3',
        padding: '1em 0.5em',
        marginTop: '10px',
        cursor: 'text',
    },
    divider: {
        marginTop: '0.5em',
    },
    editorTextField: {
        fontSize: '14px',
        padding: '10px',
        color: '#525252',

    }
}));

const useStylesForBlockStyleController = makeStyles(theme => ({
    blockStyleController: {
        display: 'flex',
    }
}));

const useStylesForInlineStyleController = makeStyles(theme => ({
    inlineStyleControllers: {
        display: 'flex',
    }
}));

export default RichTextEditor;