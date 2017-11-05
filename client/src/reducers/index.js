import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import reviewsReducer from './reviewsReducer';
import ratingReducer from './ratingReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  reviews: reviewsReducer,
  rating: ratingReducer
});
