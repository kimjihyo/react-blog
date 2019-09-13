import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StyleButton from './text_editor/StyleButton.jsx';
import RichTextEditor from './text_editor/RichTextEditor.jsx';


const CommentSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.styleControllerRow}>
            <RichTextEditor />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    styleControllerRow: {
        display: 'flex',
    }
}));

export default CommentSection;