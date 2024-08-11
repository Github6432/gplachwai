import axios from "axios";
// import toast from "react-hot-toast";

export const addVisitor  = (visitorData) => async dispatch => {
    dispatch({ type: 'ADD_VISITOR_REQUEST' });
    try {
        const res = await axios.post('/api/users/visitor', visitorData);
        dispatch({ type: 'ADD_VISITOR_SUCCESS', payload:res.data});
    } catch (error) {
        dispatch({ type: 'ADD_VISITOR_FAIL', payload: error.response.data.message });
    }
}


export const officeStatusUpdate  = () => async dispatch => {
    dispatch({ type: 'UPDATE_OFFICE_STATUS_REQUEST' });
    try {
        const res = await axios.post('/api/users/editofficestatus');
        dispatch({ type: 'UPDATE_OFFICE_STATUS_SUCCESS', payload:res.data});
    } catch (error) {
        dispatch({ type: 'UPDATE_OFFICE_STATUS_FAIL', payload: error.response.data.message });
    }
}


export const getOfficeStatus  = () => async dispatch => {
    dispatch({ type: 'GET_OFFICE_STATUS_REQUEST' });
    try {
        const res = await axios.get('/api/users/getofficestatus');
        dispatch({ type: 'GET_OFFICE_STATUS_SUCCESS', payload:res.data.statusData.officeStatus});
        
    } catch (error) {
        dispatch({ type: 'GET_OFFICE_STATUS_FAIL', payload: error.response.data.message });
    }
}