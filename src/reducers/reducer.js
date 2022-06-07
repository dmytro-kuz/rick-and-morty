import {combineReducers} from 'redux'
import charactersInfoReducer from './characterReducers/charactersInfoReducer';
import charactersReducer from './characterReducers/charastersReducer';
import errorReducer from './characterReducers/errorReducer';

export default combineReducers({
  charactersReducer,
  charactersInfoReducer,
  errorReducer,
})
