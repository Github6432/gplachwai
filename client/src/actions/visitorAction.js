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