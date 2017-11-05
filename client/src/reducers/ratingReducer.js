import { SET_RATING } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SET_RATING:
      return action.payload || false;
    default:
      return state;
  }
}
