import React from 'react';
import Comment from './Comment.jsx';
import RichTextEditor from '../text_editor/RichTextEditor.jsx';

class CommentViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldDisplaySubComments: this.props.willDisplaySubComments,
            isReplying: false,
        };
        this.onReplyClicked = this.onReplyClicked.bind(this);
    }

    componentDidMount() {

    }

    getSubComments() {
        return [
            {
                body: { "blocks": [{ "key": "1s4vc", "text": "hrthrthrsthrsthsrthshrsth", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }], "entityMap": {} },
                author: 'Some Sub-Comment',
                id: 'dwadwdsa',
                date: 'new Date(Date.now())'
            }
        ];
    }

    onLikeClicked(id) {
        console.log(id);
    }

    onReplyClicked(id) {
        console.log(id);
        this.props.closeOtherOpenTextEditors(this.props.comment.id);
        this.setState({
            isReplying: !this.state.isReplying,
        })
    }

    onHideSubCommentsClicked(id) {
        console.log(id);
        this.setState({
            shouldDisplaySubComments: !this.state.shouldDisplaySubComments,
        })
    }

    onCancelClickedFromTextField(id) {
        this.setState({
            isReplying: false,
        })
    }

    onSaveClickedFromTextField(id) {
        this.setState({
            isReplying: false,
        })
    }

    render() {
        return (
            <div>
                <Comment
                    comment={this.props.comment}
                    isSubComment={false}
                    onLikeClicked={() => this.onLikeClicked(this.props.comment.id)}
                    onReplyClicked={() => this.onReplyClicked(this.props.comment.id)}
                    onHideSubCommentsClicked={() => this.onHideSubCommentsClicked(this.props.comment.id)}
                />
                {this.state.isReplying &&
                    <RichTextEditor
                        placeholder={'Replying to ' + this.props.comment.author + '...'}
                        onCancel={() => { this.onCancelClickedFromTextField(this.props.comment.id) }}
                        onSave={() => { this.onSaveClickedFromTextField(this.props.comment.id) }}
                        isBlockStyleEnabled={false}
                    />
                }
                {this.state.shouldDisplaySubComments &&
                    this.getSubComments().map(subComment => (
                        <Comment
                            key={subComment.id}
                            isSubComment={true}
                            comment={subComment}
                            onLikeClicked={() => this.onLikeClicked(subComment.id)}
                            onReplyClicked={() => this.onReplyClicked(subComment.id)}
                        />
                    ))
                }
            </div>
        )
    }
}

export default CommentViewController;