import React, {Component} from 'react';
import api from '../../api';

export default class CreateComment extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
 
    };
  }


  componentWillMount() {

  }



  _handleCreateComment = () => {

	let comment = this.refs.comment.value;

	this.props.onPostComment(comment)

  }


  render() {

    return (
        <div>
          <h1>Create New Comment</h1>
	          <textarea 
	            ref="comment" 
	            placeholder="write comment"
	            maxLength="400"
	            rows="8"
	            cols="50"
	            />

            <button onClick={this._handleCreateComment}>Create Comment</button>
      	</div>

    )
  }



}