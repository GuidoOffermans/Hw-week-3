import { ADD_MODEL } from '../actions/models';

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MODEL:
      return state
    default:
      return state
  }
}