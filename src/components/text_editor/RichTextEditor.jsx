import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper, Button } from '@material-ui/core';
import StyleButton from './StyleButton.jsx';
import { Editor, EditorState, RichUtils } from 'draft-js';

const RichTextEditor = () => {
    const editorRef = React.createRef();
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
    const onClick = (e) => {
        editorRef.current.focus();
    }
    return (
        <Paper className={classes.richTextEditor}>
            <BlockStyleController />
            <InlineStyleController />
            <Divider className={classes.divider} />
            <div
                className={classes.editorTextField}
                onClick={onClick}
            >
                <Editor
                    ref={editorRef}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange}
                    placeholder={'Please tell a story'}
                />
            </div>
            <div className='bottomRow'>
                <TextFieldButtons />

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
    const [activeController, setActiveController] = React.useState(null);
    const onToggle = (text) => {
        if (text != activeController) {
            setActiveController(text);
        } else {
            setActiveController(null);
        }
    }
    return (
        <div className={classes.blockStyleController}>
            {blockStyleControllers.map(item => (
                <StyleButton key={item} text={item} clicked={item === activeController} onToggle={onToggle} />
            ))}
        </div>
    );
}

const inlineStyleControllers = [
    'Bold', 'Italic', 'Underline', 'Monospace'
]

const InlineStyleController = () => {
    const classes = useStylesForInlineStyleController();
    const [activeController, setActiveController] = React.useState(null);
    const onToggle = (text) => {
        if (text != activeController) {
            setActiveController(text);
        } else {
            setActiveController(null);
        }
    }
    return (
        <div className={classes.blockStyleController}>
            {inlineStyleControllers.map(item => (
                <StyleButton key={item} text={item} clicked={item === activeController} onToggle={onToggle} />
            ))}
        </div>
    );
}

const textFieldButtons = [
    'Cancel',
    'Save',
    'Preview',
]

const TextFieldButtons = () => {
    const classes = useStylesForTextFieldButtons();
    return (
        <div className={classes.buttonRows}>
            {textFieldButtons.map(item => (
                <Button
                    key={item}
                    className={classes.button}
                    color={item === 'Save' ? 'primary' : 'inherit'}
                    size='small'
                    disableRipple
                >
                    {item}
                </Button>
            ))}
        </div>
    )
}

const useStylesForRichTextEditor = makeStyles(theme => ({
    richTextEditor: {
        width: '100%',
        outline: '1px solid #e3e3e3',
        padding: '1em 0.5em',
        marginTop: '10px',
    },
    divider: {
        marginTop: '0.5em',
    },
    editorTextField: {
        fontSize: '14px',
        padding: '10px',
        color: '#525252',
        cursor: 'text',
        minHeight: '5em',
    },
    bottomRow: {
        display: 'inline-block',
        marginLeft: 'auto',
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

const useStylesForTextFieldButtons = makeStyles(theme => ({
    buttonRows: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        fontSize: '12px',
    },
}));

export default RichTextEditor;