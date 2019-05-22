import { createStore } from 'redux';
// import createLogger from 'redux-logger';
import reducers from '../reducers';

const store = createStore(reducers);

export {
  store,
};
