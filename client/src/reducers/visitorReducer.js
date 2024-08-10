export const visitorReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_VISITOR_REQUEST':
            return { loading: true }
        case 'ADD_VISITOR_SUCCESS':
            return { loading: false, success: true, res: action.payload }
        case 'ADD_VISITOR_FAIL':
            return {loading:false, success: false,error: action.payload }
        default: return state
    }
}