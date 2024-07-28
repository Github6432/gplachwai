import axios from "axios";
import toast from "react-hot-toast";

export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' });
    try {
        await axios.post('/api/users/register', user);
        dispatch({ type: 'USER_REGISTER_SUCCESS' });
        setTimeout(() => {
            window.location.href = '/login';
        }, 7000);
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAIL', payload: error });
    }
}


export const forgetPassword = (user) => async dispatch => {
    dispatch({ type: 'USER_FORGET_PASSWORD_REQUEST' });
    try {
        const res = await axios.post('/api/users/forgetpassword', user);
        dispatch({ type: 'USER_FORGET_PASSWORD_SUCCESS', payload: res.data });
        toast.success(res.data.message)
    } catch (error) {
        dispatch({ type: 'USER_FORGET_PASSWORD_FAIL', payload: error.response.data });
        toast.error(error.res.data)
        console.log('eee',error.response.data)
    }
}


export const loginUser = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' });
    try {
        const res = await axios.post('/api/users/login', user);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.data });
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        // setTimeout(() => {
        //     window.location.href = '/';
        // }, 4000);
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data });
        console.log(error.response.data)
    }
}

export const logoutUser = (user) => async dispatch => {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
}