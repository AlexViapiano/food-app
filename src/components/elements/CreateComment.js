import React, {Component} from 'react';
import './CreateComment.css'

export default class CreateComment extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _handleCreateComment = () => {
  	let comment = this.refs.comment.value;
  	this.props.onPostComment(comment)
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
            />
	        <br></br>
          <button onClick={this._handleCreateComment}>Create Comment</button>
      	</div>
    )
  }

}