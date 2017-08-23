import React, {Component} from 'react';
import './CreateComment.css'

export default class CreateComment extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isCommenting: false
    };
  }

  _handleCreateComment = () => {
  	let comment = this.refs.comment.value;
  	this.props.onPostComment(comment);
    this.setState({
      isCommenting: true
    });
    this.refs.comment.value = "";
  }

  _handleTyping = () => {
    this.setState({
      isCommenting: false
    });
  }

  render() {
    return (
        <div className="comment-area">
          <textarea 
            ref="comment" 
            placeholder="new comment"
            maxLength="400"
            rows="8"
            cols="50"
            onKeyUp={this._handleTyping}
            />
	        <br></br>
          {this.state.isCommenting === false ?
          <button onClick={this._handleCreateComment}>Create Comment</button> 
          : null }
      	</div>
    )
  }

}