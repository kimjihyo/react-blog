import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RichTextEditor from './text_editor/RichTextEditor.jsx';


const CommentSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.styleControllerRow}>
            <RichTextEditor placeholder={'Leave a comment right here'}/>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    styleControllerRow: {
        display: 'flex',
    }
}));

export default CommentSection;