
import CounterReducer from './Counter';
import loggedReducer from './Islogged';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    mycounter : CounterReducer,
    isLogged: loggedReducer
});
export default allReducer;