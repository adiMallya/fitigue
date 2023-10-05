import { rootReducer } from "src/store";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction, Dispatch } from "redux";
import { AxiosResponse } from "axios";
//shape of AuthResponse
export interface AuthResponse {
    success: boolean;
    token?: string;
    error?: string;
}
//type created for error responses 
export class APIError extends Error {
    response: AxiosResponse;

    constructor(response: AxiosResponse) {
        super(response.data.message);
        this.response = response;
    }
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>;

export type AppDispatch = Dispatch<AnyAction>;
export type ThunkAppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
