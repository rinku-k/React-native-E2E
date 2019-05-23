import { combineReducers } from 'redux';
import newText from './textChange';

// const reducers = combineReducers({
//   newText,
// });

const reducers = (state = defaultState, action) => ({
  ...newText(state = defaultState, action),
});

export default newText;