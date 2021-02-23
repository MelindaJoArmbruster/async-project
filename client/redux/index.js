import { combineReducers } from 'redux';
//replace the reducers below as needed
import templatesReducer from './templatesReducer';
import singleTemplateReducer from './singleTemplateReducer';

const appReducer = combineReducers({
  templatesSlice: templatesReducer,
  singleTemplateSlice: singleTemplateReducer,
  // default2: defaultReducer2,
  //replace reducers above and add other reducers as needed
});

export default appReducer;
