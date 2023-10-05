// shape of auth state
export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    loading?: boolean;
    error: string | null;
}

// action types
export const AUTH_SUCCESS = 'authenticate/success';
export const AUTH_PENDING = 'authenticate/pending';
export const AUTH_ERROR = 'authenticate/error';
export const LOG_OUT = 'authenticate/logout';

interface AuthSuccessAction {
    type: typeof AUTH_SUCCESS;
    payload: string
}

interface AuthErrorAction {
    type: typeof AUTH_ERROR;
    payload: string
}

interface LogoutAction {
    type: typeof LOG_OUT;
}

export type AuthActionType = AuthSuccessAction | AuthErrorAction | LogoutAction;