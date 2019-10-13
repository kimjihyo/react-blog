import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper, Button } from '@material-ui/core';
import StyleButton from './StyleButton.jsx';
import { Editor, EditorState, RichUtils, ContentState, convertToRaw } from 'draft-js';
import './TextEditor.css';

const RichTextEditor = (props) => {
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

    const clearContents = () => {
        const newEditorState = EditorState.push(editorState, ContentState.createFromText(''));
        setEditorState(newEditorState);
    }

    const toggleBlockType = (blockType) => {
        onChange(
            RichUtils.toggleBlockType(
                editorState,
                blockType
            )
        );
    }

    const toggleInlineStyle = (inlineStyle) => {
        onChange(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
    }

    const getBlockStyle = (block) => {
        switch (block.getType()) {
            case 'blockquote':
                return 'RichEditor-blockquote';
            default: return null;
        }
    }

    const getStyleController = (isBlockStyleEnabled) => {
        if (isBlockStyleEnabled) {
            return (
                <React.Fragment>
                    <BlockStyleController
                        editorState={editorState}
                        onToggle={toggleBlockType}
                    />
                    <InlineStyleController
                        editorState={editorState}
                        onToggle={toggleInlineStyle}
                    />
                </React.Fragment>
            );
        }

        return (
            <InlineStyleController
                editorState={editorState}
                onToggle={toggleInlineStyle}
            />
        );
    }

    return (
        <Paper className={classes.richTextEditor}>
            {getStyleController(props.isBlockStyleEnabled)}
            <Divider className={classes.divider} />
            <div
                className={classes.editorTextField}
                onClick={onClick}
            >
                <Editor
                    ref={editorRef}
                    blockStyleFn={getBlockStyle}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange}
                    placeholder={props.placeholder}
                />
            </div>
            <div className='bottomRow'>
                <TextFieldButtons
                    onClick={(buttonType) => {
                        switch (buttonType) {
                            case 'Save':
                                props.onSave(convertToRaw(editorState.getCurrentContent()));
                                break;
                            case 'Cancel':
                                clearContents();
                                props.onCancel();
                                break;
                            default:
                                console.log('error on text editor event handler');
                        }
                    }}
                />
            </div>
        </Paper>
    );
}

const BLOCK_TYPES = [
    { label: 'H1', style: 'header-one' },
    { label: 'H2', style: 'header-two' },
    { label: 'H3', style: 'header-three' },
    { label: 'H4', style: 'header-four' },
    { label: 'H5', style: 'header-five' },
    { label: 'H6', style: 'header-six' },
    { label: 'Blockquote', style: 'blockquote' },
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
    { label: 'Code Block', style: 'code-block' },
];

const BlockStyleController = (props) => {
    const classes = useStylesForBlockStyleController();
    const selection = props.editorState.getSelection();
    const blockType = props.editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className={classes.blockStyleController}>
            {BLOCK_TYPES.map(item => (
                <StyleButton
                    key={item.label}
                    label={item.label}
                    style={item.style}
                    active={item.style === blockType}
                    onToggle={() => props.onToggle(item.style)}
                />
            ))}
        </div>
    );
}

const INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
    { label: 'Monospace', style: 'CODE' },
];

const InlineStyleController = (props) => {
    const classes = useStylesForInlineStyleController();
    const currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div className={classes.inlineStyleControllers}>
            {INLINE_STYLES.map(item => (
                <StyleButton
                    key={item.label}
                    label={item.label}
                    style={item.style}
                    active={currentStyle.has(item.style)}
                    onToggle={() => props.onToggle(item.style)} />
            ))}
        </div>
    );
}

const textFieldButtons = [
    'Cancel',
    'Save',
];

const TextFieldButtons = (props) => {
    const classes = useStylesForTextFieldButtons();
    return (
        <div className={classes.buttonRows}>
            {textFieldButtons.map(item => (
                <div className={classes.button}>
                    <Button
                        key={item}
                        onClick={(e) => props.onClick(item)}
                        color={item === 'Save' ? 'primary' : 'inherit'}
                        size='small'
                        disableRipple
                    >
                        {item}
                    </Button>
                </div>
            ))}
        </div>
    )
}

const useStylesForRichTextEditor = makeStyles(theme => ({
    richTextEditor: {
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
        marginBottom: '0.5em',
    }
}));

const useStylesForInlineStyleController = makeStyles(theme => ({
    inlineStyleControllers: {
        display: 'flex',
        marginBottom: '1em',
    }
}));

const useStylesForTextFieldButtons = makeStyles(theme => ({
    buttonRows: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        color: '#525252',
    },
}));

export default RichTextEditor;