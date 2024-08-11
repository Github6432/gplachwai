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


export const officeStatusReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_OFFICE_STATUS_REQUEST':
            return { loading: true }
        case 'UPDATE_OFFICE_STATUS_SUCCESS':
            return { loading: false, success: true, res: action.payload }
        case 'UPDATE_OFFICE_STATUS_FAIL':
            return {loading:false, success: false,error: action.payload }
        default: return state
    }
}


export const getOfficeStatusReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_OFFICE_STATUS_REQUEST':
            return { loading: true }
        case 'GET_OFFICE_STATUS_SUCCESS':
            return { loading: false, success: true, officeStatus: action.payload }
        case 'GET_OFFICE_STATUS_FAIL':
            return {loading:false, success: false,error: action.payload }
        default: return state
    }
}