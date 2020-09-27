import loggedReducer from './isLogged'
import counterReducer from './counter'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  logged: loggedReducer,
  counter: counterReducer
})

export default allReducers;