import axios from "axios";
import toast from "react-hot-toast";

export const feedHandPump = (handpumpData) => async dispatch => {
    dispatch({ type: 'FEED_HANDPUMP_REQUEST' });
    try {
        const res = await axios.post('/api/users/handpump', handpumpData);
        dispatch({ type: 'FEED_HANDPUMP_SUCCESS', payload:res.data});
    } catch (error) {
        dispatch({ type: 'FEED_HANDPUMP_FAIL', payload: error.response.data.message });
    }
}