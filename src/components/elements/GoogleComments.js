import React, {Component} from 'react';

export default class GoogleComments extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let googleComments = this.props.googleComments

    return (
        
       <div className="comments-text">
            {googleComments ?
              googleComments.map((googleComments, idx) => {
              return(
                <div className="reviews" key={idx}>
                  <div className="separate-reviews">
                    <h2 className="user-name-title">{googleComments.author_name} </h2>
                    <p>{googleComments.text}</p>
                  </div>
                </div>
                )}
              )
              : null }
          </div>
    )
  }

}