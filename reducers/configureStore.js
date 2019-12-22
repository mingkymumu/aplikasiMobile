import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const configureStore = (reducer) => {
  return createStore(reducer, applyMiddleware(thunk));
}

export default configureStore;