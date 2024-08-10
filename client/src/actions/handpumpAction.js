import axios from "axios";
import toast from "react-hot-toast";

export const feedHandPump = (handpumpData) => async dispatch => {
    dispatch({ type: 'FEED_HANDPUMP_REQUEST' });
    try {
        const res = await axios.post('/api/users/controller/handpump', handpumpData);
        dispatch({ type: 'FEED_HANDPUMP_SUCCESS', payload:res.data});
    } catch (error) {
        dispatch({ type: 'FEED_HANDPUMP_FAIL', payload: error.response.data.message });
    }
}


export const getAllHandPumpList = () => async dispatch => {
    dispatch({ type: 'GET_HANDPUMP_REQUEST' });
    try {
        const res = await axios.get('/api/users/handpumpreport');
        dispatch({ type: 'GET_HANDPUMP_SUCCESS', payload:res.data});
    } catch (error) {
        dispatch({ type: 'GET_HANDPUMP_FAIL', payload: error.response.data.message });
    }
}

export const deletehandPump = (handpumpid) => async (dispatch) => {
    try {
        await axios.post("/api/users/deletehandpumprecord", { handpumpid });              
        toast.success("Handpump Record Deleted Succss!");
        dispatch(getAllHandPumpList());
    } catch (error) {
        toast.error(error.response.data.message);
    }
};