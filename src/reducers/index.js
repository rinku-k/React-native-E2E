import { combineReducers } from 'redux';
import textState from './textChange';
import feeds from './fetchfeeds';

const reducers = combineReducers({
  textState,
  feeds,
});

export default reducers;