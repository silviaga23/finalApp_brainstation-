import {createStore, combineReducers} from "redux";

import products from "./reducers/products";
import cart from './reducers/cart';
import users from './reducers/users';

export default createStore(
    combineReducers({
        products,
        cart,
        users,
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
