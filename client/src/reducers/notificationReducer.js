export const notificationReducer  = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION_REQUEST':
            return { loading: true }
        case 'ADD_NOTIFICATION_SUCCESS':
            return { loading: false, success: true, notification: action.payload }
        case 'ADD_NOTIFICATION_FAIL':
            return {loading:false, success: false,error: action.payload }
        default: return state
    }
}


export const getNotificationReducer  = (state = {}, action) => {
    switch (action.type) {
        case 'GET_NOTIFICATION_REQUEST':
            return { loading: true }
        case 'GET_NOTIFICATION_SUCCESS':
            return { loading: false, success: true, notifications: action.payload }
        case 'GET_NOTIFICATION_FAIL':
            return {loading:false, success: false,error: action.payload }
        default: return state
    }
}