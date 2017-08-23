import React, {Component} from 'react';
import './Comments.css';
// import api from '../../api';

export default class Comments extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
 
    };
  }


  render() {
    let comments = this.props.comments;

    return (
        <div className="comments-text">

          <div className="reviews">
            <h2 className="review-header"> Comments</h2>
            {comments ? comments.map((comment, idx) => {
              return(
                <div className="separate-reviews" key={idx}>
                  <h2 className="user-name-title">{comment.firstName} {comment.lastName}</h2>
                  <p>{comment.comment}</p>
                </div>
                )}
              )
              : null }
          </div>

      	</div>

    )
  }



}


