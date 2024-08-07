import axios from "axios";
import toast from "react-hot-toast";

export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' });
    try {
        const res = await axios.post('/api/users/register', user);
        dispatch({ type: 'USER_REGISTER_SUCCESS', payload:res.data});
        console.log('RRRRR',res)
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAIL', payload: error.response.data.message });
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
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data });
        console.log(error.response.data)
    }
}

export const logoutUser = (user) => async dispatch => {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
}

export const getAllUser = () => async dispatch => {
    dispatch({ type: 'GET_ALL_USER_REQUEST' });
    try {
        const res = await axios.get('/api/users/controller/getallusers');
        dispatch({ type: 'GET_ALL_USER_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'GET_ALL_USER_FAIL', payload: error.response.data });
        console.log(error.response.data)
    }
}

export const deleteUser = (userid) => async (dispatch) => {
    try {
        await axios.post("/api/users/deleteuser", { userid });              
        toast.success("User Deleted Succss!");
        dispatch(getAllUser());
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

export const editUser = (user) => async (dispatch) => {
    dispatch({ type: 'USER_ROLE_CHANGE_REQUEST' });
    try {
        await axios.post("/api/users/edituser", { user });
        const res = await axios.get('/api/users/controller/getallusers');
        dispatch({ type: 'USER_ROLE_CHANGE_SUCCESS', payload: res.data });
        setTimeout(() => {
            window.location.reload();
        }, 2500);
        toast.success("User Role Updated Succss!", "success");
    } catch (error) {
        dispatch({ type: 'USER_ROLE_CHANGE_FAIL' });
        toast.error(error.response.data.message);
    }
};