import * as authService from './authService';
import { AppThunk } from 'src/shared';
import { UserDataType } from './types';

const login = (email: string, password: string): AppThunk => async (dispatch) => {
    try {
        const data = await authService.postLoginData(email, password);
        if (data.success) {
            sessionStorage.setItem('access_token', data.token!);
            dispatch({ type: "authenticate/success", payload: data.token });
        } else {
            dispatch({ type: "authenticate/error", payload: data.error });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "authenticate/error", payload: error.error });
        } else {
            dispatch({ type: "authentication/error", payload: "An unknown error occured." });
        }
    }
};

const signUp = (formData: UserDataType): AppThunk => async (dispatch) => {
    try {
        const data = await authService.postSignUpData(formData);
        if (data.success) {
            sessionStorage.setItem('access_token', data.token!);
            dispatch({ type: "authenticate/success", payload: data.token });
        } else {
            dispatch({ type: "authenticate/error", payload: data.error });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "authenticate/error", payload: error.error });
        } else {
            dispatch({ type: "authentication/error", payload: "An unknown error occured." });
        }
    }
}

export { login, signUp };

