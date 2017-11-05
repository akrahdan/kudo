import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReviews, shareReview } from '../../actions';
import ReactStars from 'react-stars';
import { withRouter } from 'react-router-dom';

class ReviewList extends Component {
  componentDidMount() {
    this.props.fetchReviews();
    console.log(this.props)
  }

  onShare(review) {
    this.props.shareReview(review, this.props.history)
  }
  
  renderReviews() {
    return this.props.reviews.reverse().map(review => {
      return (
        <div className="row" key={review._id}>
         <div className="col-md-4 mx-auto">
          <div className="card" style={{marginTop: 20}}>
           <div className="card-body text-center">
            <ReactStars
             count={5}
              size={18}
              value = {review.rating}
              color2={'#ffd700'} />
             {review.content}
             <p>
               Sent On: {new Date(review.dateSent).toLocaleDateString()}
             </p>
             <button className="btn btn-normal btn-block" onClick={()=> this.onShare(review)}>Share </button>
            </div>
          </div>
          </div>
         </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderReviews()}

      </div>
    );
  }
}

function mapStateToProps({ reviews, rating, auth }) {
  return { reviews, rating, auth};
}

export default connect(mapStateToProps, { fetchReviews, shareReview })(withRouter(ReviewList));
