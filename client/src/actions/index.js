import axios from 'axios';

import { FETCH_USER, FETCH_REVIEWS, SET_RATING, SHARE_REVIEW } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const submitReview = (values, history, rating) => async dispatch => {
   values.rating = rating || ''

  const res = await axios.post('/api/reviews', values);

  history.push('/reviews');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchReviews= () => async dispatch => {
  const res = await axios.get('/api/reviews');

  dispatch({ type: FETCH_REVIEWS, payload: res.data });
};


export const shareReview = (review, history) => async (dispatch, getState) => {
  const auth = getState().auth;
  const params = {
    'access_token': auth.access_token,
    'message': review.content
  };

  const res = await axios.post(`/api/shareReview`, params )
  history.push('/');
  dispatch({type: SHARE_REVIEW, payload: res.data})

}



export const setRating = (rating) => async dispatch => {

    dispatch({type: SET_RATING, payload: rating});
};
