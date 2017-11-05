// ReviewFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import ReactStars from 'react-stars'

const ReviewFormReview = ({ onCancel, formValues, submitReview, history, rating }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div className="row" style={{marginTop: 20}}>
      <div className="col-md-4 mx-auto">
        <h5>Please confirm your entries</h5>
        <div>
          <label>Rating</label>
          <ReactStars
            count={5}
             size={24}
             value = {rating}
             color2={'#ffd700'} />
        </div>
         {reviewFields}
         <button
          className="btn btn-outline-warning"
          onClick={onCancel}
          >
          Back
         </button>
         <button
           style = {{marginLeft:20, width:200}}
           onClick={() => submitReview(formValues, history, rating)}
           className="btn btn-outline-primary">

            Submit Review
         </button>
      </div>

    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.reviewForm.values,
    rating: state.rating
  };
}

export default connect(mapStateToProps, actions)(withRouter(ReviewFormReview));
