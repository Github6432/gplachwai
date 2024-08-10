import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';  // Corrected import
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from './reducers/userReducer';
import { getHandpumpReducer, registerHandpumpReducer } from './reducers/handpumpReducers';
import { visitorReducer } from './reducers/visitorReducer';
import { getNotificationReducer, notificationReducer } from './reducers/notificationReducer';

const rootReducer = combineReducers({
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    getAllUsersReducer: getAllUsersReducer,
    registerHandpumpReducer: registerHandpumpReducer,
    getHandpumpReducer: getHandpumpReducer,
    visitorReducer: visitorReducer,
    notificationReducer: notificationReducer,
    getNotificationReducer: getNotificationReducer,
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
