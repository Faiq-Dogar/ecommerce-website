import { combineReducers } from 'redux';
import itemsReducer from './itemReducers';
import userReducer from './userReducers';
import quantityReducer from  './quantityReducers';

const rootReducer = combineReducers({
  items: itemsReducer,
  user: userReducer,
  quantity: quantityReducer,
});

export default rootReducer;