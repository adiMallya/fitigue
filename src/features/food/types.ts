//shape of food data
export interface FoodData {
    _id: string;
    name: string;
    calories: number;
    carbs: number;
    proteins: number;
    fats: number;
    [key: string]: any;
}

// shape of food state
export interface FoodState {
    food: FoodData[];
    loading: boolean;
    error: string | null;
}

// action types
export const FOOD_SUCCESS = 'food/success';
export const FOOD_PENDING = 'food/pending';
export const FOOD_ERROR = 'food/error';
export const FOOD_DELETE = 'food/delete';
export const CLEAR_ERROR = 'clear/error';

interface FoodSuccessAction {
    type: typeof FOOD_SUCCESS;
    payload: FoodData[];
}

interface FoodDeleteAction {
    type: typeof FOOD_DELETE;
    payload: string;
}

interface FoodErrorAction {
    type: typeof FOOD_ERROR;
    payload: string
}

interface FoodPendingAction {
    type: typeof FOOD_PENDING;
}

interface ClearErrorAction {
    type: typeof CLEAR_ERROR;
}

export type FoodActionType = FoodSuccessAction | FoodDeleteAction | FoodPendingAction | FoodErrorAction | ClearErrorAction;
