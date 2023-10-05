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
export const CLEAR_ERROR = 'authenticate/clear';

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

interface ClearErrorAction {
    type: typeof CLEAR_ERROR;
}

export type AuthActionType = AuthSuccessAction | AuthErrorAction | LogoutAction | ClearErrorAction;
//
export interface UserDataType {
    firstName: string;
    lastName: string;
    email: string,
    password: string,
    username: string,
    bio?: string,
    sex: string,
    age: number,
    height: number,
    weight: number,
    phone?: number | string
}