import { AuthState, AUTH_SUCCESS, AUTH_ERROR, LOG_OUT, AuthActionType } from "./types";

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
            };
        case AUTH_ERROR:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: action.payload
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
