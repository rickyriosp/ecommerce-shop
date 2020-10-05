import { applyMiddleware, combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { productsListReducer } from './reducers/productReducers.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({ productsList: productsListReducer });
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
