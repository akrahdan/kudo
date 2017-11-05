// ReviewNew shows ReviewForm and ReviewFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ReviewForm from './ReviewForm';
import ReviewFormReview from './ReviewFormReview';

class ReviewNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ReviewFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <ReviewForm
        onReviewSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'reviewForm'
})(ReviewNew);
