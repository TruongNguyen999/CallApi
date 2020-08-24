import { combineReducers } from 'redux';
import Products from './Products';
import Editting from './Editting';

const appReducers = combineReducers({
    Products,
    Editting
})

export default appReducers;