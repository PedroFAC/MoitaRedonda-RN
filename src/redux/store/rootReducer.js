import { combineReducers } from 'redux';
import cartReducer from '../reducers/cart';

const rootReducer = combineReducers({
  cartReducer,
});

export default rootReducer;
