export const registerHandpumpReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FEED_HANDPUMP_REQUEST':
            return { loading: true }
        case 'FEED_HANDPUMP_SUCCESS':
            return { loading: false, success: true, res: action.payload }
        case 'FEED_HANDPUMP_FAIL':
            return {loading:false, success: false,error: action.payload }
        default: return state
    }
}