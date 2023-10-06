import { AuthState, AUTH_SUCCESS, AUTH_ERROR, LOG_OUT, CLEAR_ERROR, AuthActionType, AUTH_PENDING } from "./types";

const initialState: AuthState = {
    token: sessionStorage.getItem('access_token'),
    isAuthenticated: sessionStorage.getItem('access_token') ? true : false,
    loading: false,
    error: null
};

export const authReducer = (state = initialState, action: AuthActionType): AuthState => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                loading: false,
                error: null
            };
        case AUTH_ERROR:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: action.payload,
                loading: false,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        case LOG_OUT:
            sessionStorage.removeItem('access_token');
            return {
                token: null,
                isAuthenticated: false,
                error: null,
                loading: false
            }
        case AUTH_PENDING:
            return {
                ...state,
                loading: true
            }
        default: return state;
    }
}
