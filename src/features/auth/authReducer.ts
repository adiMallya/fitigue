import { AuthState, AUTH_SUCCESS, AUTH_ERROR, LOG_OUT, CLEAR_ERROR, AuthActionType } from "./types";

const initialState: AuthState = {
    token: sessionStorage.getItem('access_token'),
    isAuthenticated: sessionStorage.getItem('access_token') ? true : false,
    error: null
};

export const authReducer = (state = initialState, action: AuthActionType): AuthState => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                error: null
            };
        case AUTH_ERROR:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: action.payload
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
                error: null
            }
        default: return state;
    }
}
