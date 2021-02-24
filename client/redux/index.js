import { combineReducers } from 'redux';
//replace the reducers below as needed
import templatesReducer from './templatesReducer';
import singleTemplateReducer from './singleTemplateReducer';
import orderReducer from './orderReducer';

const appReducer = combineReducers({
  templatesSlice: templatesReducer,
  singleTemplateSlice: singleTemplateReducer,
  orderSlice: orderReducer,
});

export default appReducer;
