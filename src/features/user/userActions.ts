import { ProfileData } from "./types";
import * as userService from "./userService";
import { AppThunk } from 'src/shared/types';

const fetchMyDetails = (token: string): AppThunk => async (dispatch) => {
    dispatch({ type: "user/pending" });
    try {
        const data = await userService.getUser(token);
        if (data.success) {
            const { _id, createdAt, updatedAt, __v, ...rest } = data.data as ProfileData;
            dispatch({ type: "user/success", payload: rest });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "user/error", payload: error.error });
        } else {
            dispatch({ type: "user/error", payload: "An unknown error occured." });
        }
    }
};

export { fetchMyDetails };