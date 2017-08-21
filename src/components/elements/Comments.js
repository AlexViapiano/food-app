import React, {Component} from 'react';
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
        <div>

          <div>
            {comments ? comments.map((comment, idx) => {
              return(
                <div key={idx}>
                  <p>-----------------------------------------------------------</p>
                  <h2>{comment.firstName} {comment.lastName}</h2>
                  <div>Comment: {comment.comment}</div>
                </div>
                )}
              )
              : null }
          </div>

      	</div>

    )
  }



}


