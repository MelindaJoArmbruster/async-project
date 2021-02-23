import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import appReducer from '../redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

let middleware = [thunkMiddleware.withExtraArgument({ axios })];

// if (process.browser) {
//   middleware = [...middleware, createLogger({ collapsed: true })];
// }

export default createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// const store = createStore(
//   appReducer,
//   composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
// );

// export default store;
