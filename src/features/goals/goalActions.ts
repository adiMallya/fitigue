import { AppThunk } from "src/shared";
import * as goalService from "./goalService";
import { Status } from "./types";

const fetchGoals = (token: string): AppThunk => async (dispatch) => {
    try {
        const data = await goalService.getGoalsData(token);
        if (data.success) {
            dispatch({ type: "goal/success", payload: data.data });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "goal/error", payload: error.error });
        } else {
            dispatch({ type: "goal/error", payload: "An unknown error occured." });
        }
    }
}

const createGoal = (name: string, description: string, targetDate: string, targetCalories: number, token: string): AppThunk => async (dispatch) => {
    try {
        const data = await goalService.postGoal(name, description, targetDate, targetCalories, token);
        if (data.success) {
            dispatch({ type: "goal/success", payload: data.data });
        } else {
            dispatch({ type: "goal/error", payload: data.error });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "gaol/error", payload: error.error });
        } else {
            dispatch({ type: "goal/error", payload: "An unknown error occured." });
        }
    }
}

const updateGoalStatus = (id: string, status: Status, token: string): AppThunk => async (dispatch) => {
    try {
        const data = await goalService.updateGoalStatus(id, status, token);
        if (data.success) {
            dispatch({ type: "goal/success", payload: data.data });
        } else {
            dispatch({ type: "goal/error", payload: data.error });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "gaol/error", payload: error.error });
        } else {
            dispatch({ type: "goal/error", payload: "An unknown error occured." });
        }
    }
}

const deleteGoal = (id: string, token: string): AppThunk => async (dispatch) => {
    try {
        const res = await goalService.deleteGoal(id, token);
        if (res.status === 204) {
            dispatch({ type: "goal/delete", payload: id });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "goal/error", payload: error.error });
        } else {
            dispatch({ type: "goal/error", payload: "An unknown error occured." });
        }
    }
}

export { fetchGoals, createGoal, updateGoalStatus, deleteGoal };