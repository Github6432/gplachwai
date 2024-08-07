export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return { loading: true }
        case 'USER_REGISTER_SUCCESS':
            return { loading: false, success: true, res: action.payload }
        case 'USER_REGISTER_FAIL':
            return {loading:false, success: false,error: action.payload }
        default: return state
    }
}


export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return { loading: true }
        case 'USER_LOGIN_SUCCESS':
            return { loading: false, success: true, currentUser: action.payload }
        case 'USER_LOGIN_FAIL':
            return { loading: false, error: action.payload }
        default: return  state 
    }
}


export const getAllUsersReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case 'GET_ALL_USER_REQUEST':
            return { loading: true } 
        case 'GET_ALL_USER_SUCCESS':
            return { loading: false, success: true, users: action.payload }
        case 'GET_ALL_USER_FAIL':
            return { loading: false, error: action.payload }
        default: return  state;
    }
}

export const editUserRoleReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_ROLE_CHANGE_REQUEST':
            return { loading: true }
        case 'USER_ROLE_CHANGE_SUCCESS':
            return { loading: false, success: true, users: action.payload }
        case 'USER_ROLE_CHANGE_FAIL':
            return { loading: false, error: action.payload }
        default: return state 
    }
}


