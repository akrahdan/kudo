// ReviewForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReviewField from './ReviewField';
import formFields from './formFields';
import ReactStars from 'react-stars'
import { setRating } from '../../actions';

class ReviewForm extends Component {



  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          style = {{marginTop: 20}}
          key={name}
          component={ReviewField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  ratingChanged = (newRating) => {
      this.props.setRating(newRating)
  }

  render() {
    return (
      <div className="row" style={{marginTop: 20}}>
       <div className="col-md-4 mx-auto">
        <form onSubmit={this.props.handleSubmit(this.props.onReviewSubmit)}>
         <div>
          <ReactStars
            count={5}
            onChange={this.ratingChanged}
             size={24}
             value = {this.props.rating}
             color2={'#ffd700'} />,
         </div>
         {this.renderFields()}
         <Link to="/reviews" className="btn-outline-primary">
           Cancel
         </Link>
         <button type="submit" className="btn-primary" style={{marginLeft: 20}}>
           Submit Review
         </button>
        </form>
       </div>

      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}
const mapStateToProps = state => ({
  rating: state.rating
})
const mapDispatchToProps = dispatch => ({
  setRating: (rating) => dispatch(setRating(rating))
});

ReviewForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);

export default reduxForm({
  validate,
  form: 'reviewForm',
  destroyOnUnmount: false
})(ReviewForm);
