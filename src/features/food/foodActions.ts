import { AppThunk } from "src/shared";
import * as foodService from "./foodService";

const fetchFood = (token: string): AppThunk => async (dispatch) => {
    try {
        const data = await foodService.getFoodData(token);
        if (data.success) {
            dispatch({ type: "food/success", payload: data.data });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "food/error", payload: error.error });
        } else {
            dispatch({ type: "food/error", payload: "An unknown error occured." });
        }
    }
}

const createFood = (name: string, carbs: number, proteins: number, fats: number, token: string): AppThunk => async (dispatch) => {
    try {
        const data = await foodService.postFood(name, carbs, proteins, fats, token);
        if (data.success) {
            dispatch({ type: "food/success", payload: data.data });
        } else {
            dispatch({ type: "food/error", payload: data.error });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "food/error", payload: error.error });
        } else {
            dispatch({ type: "food/error", payload: "An unknown error occured." });
        }
    }
}

const deleteFood = (id: string, token: string): AppThunk => async (dispatch) => {
    try {
        const res = await foodService.deleteFood(id, token);
        if (res.status === 204) {
            dispatch({ type: "food/delete", payload: id });
        }
    } catch (error: any) {
        if (error && error.success === false) {
            dispatch({ type: "food/error", payload: error.error });
        } else {
            dispatch({ type: "food/error", payload: "An unknown error occured." });
        }
    }
}

export { fetchFood, createFood, deleteFood };