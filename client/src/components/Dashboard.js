import React from 'react';
import { Link } from 'react-router-dom';
import ReviewList from './reviews/ReviewList';

const Dashboard = () => {
  return (
    <div>
      <ReviewList />
      <div className="addReview">
        <Link to="/reviews/new" className="btn-normal btn-large ">
          <i className="fa fa-plus">Add Reviews</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
