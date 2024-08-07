import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';  // Corrected import
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from './reducers/userReducer';
import { registerHandpumpReducer } from './reducers/handpumpReducers';

const rootReducer = combineReducers({
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    getAllUsersReducer: getAllUsersReducer,
    registerHandpumpReducer: registerHandpumpReducer,
    // other reducers can be added here
});



// const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
// const userr = localStorage.getItem('userr') ? JSON.parse(localStorage.getItem('userr')) : null;
axios.defaults.headers.common['Authorization'] = currentUser?.token



const initalState ={
    // cartReducer : { cartItems : cartItems },
    loginUserReducer : { currentUser : currentUser},
    // getSingleUserReducer : { userr : userr},
}

const store = createStore(
    rootReducer,
    initalState,
    applyMiddleware(thunk)
);

export default store;
