import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';  // Corrected import
import { loginUserReducer, registerUserReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    // other reducers can be added here
});



// const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
// const userr = localStorage.getItem('userr') ? JSON.parse(localStorage.getItem('userr')) : null;



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
