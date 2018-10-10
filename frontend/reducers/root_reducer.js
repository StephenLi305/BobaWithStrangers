import { combineReducers } from 'redux';

import entities from './entities/entities_reducer';
import errors from './errors/errors_reducer';
import sessionReducer from './session/session_reducer';


const rootReducer = combineReducers({
  entities,
  sessionReducer,
  errors
})

export default rootReducer;
