import { AppThunk } from "src/shared";
import * as activityService from "./activityService";

const fetchActivities = (token: string): AppThunk => async (dispatch) => {
    dispatch({ type: "activity/pending" });
    try {
        const data = await activityService.getActivityData(token);
        if (data.success) {
            dispatch({ type: "activity/success", payload: data.data });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "activity/error", payload: error.error });
        } else {
            dispatch({ type: "activity/error", payload: "An unknown error occured." });
        }
    }
}

const createActivity = (name: string, duration: number, token: string): AppThunk => async (dispatch) => {
    try {
        const data = await activityService.postActivity(name, duration, token);
        if (data.success) {
            dispatch({ type: "activity/success", payload: data.data });
        } else {
            dispatch({ type: "activity/error", payload: data.error });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "activity/error", payload: error.error });
        } else {
            dispatch({ type: "activity/error", payload: "An unknown error occured." });
        }
    }
}

const deleteActivity = (id: string, token: string): AppThunk => async (dispatch) => {
    try {
        const res = await activityService.deleteActivity(id, token);
        if (res.status === 204) {
            dispatch({ type: "activity/delete", payload: id });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "activity/error", payload: error.error });
        } else {
            dispatch({ type: "activity/error", payload: "An unknown error occured." });
        }
    }
}

export { fetchActivities, createActivity, deleteActivity };