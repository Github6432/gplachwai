import axios from "axios";
// import toast from "react-hot-toast";

export const addNotification   = (notificationData) => async dispatch => {
    dispatch({ type: 'ADD_NOTIFICATION_REQUEST' });
    try {
        const res = await axios.post('/api/users/controller/notification', notificationData);
        dispatch({ type: 'ADD_NOTIFICATION_SUCCESS', payload:res.data});
    } catch (error) {
        dispatch({ type: 'ADD_NOTIFICATION_FAIL', payload: error.response.data.message });
    }
}


export const getNotification   = () => async dispatch => {
    dispatch({ type: 'GET_NOTIFICATION_REQUEST' });
    try {
        const res = await axios.get('/api/users/notification');
        dispatch({ type: 'GET_NOTIFICATION_SUCCESS', payload:res.data.notifications});
    } catch (error) {
        dispatch({ type: 'GET_NOTIFICATION_FAIL', payload: error.response.data.message });
    }
}