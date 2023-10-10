import { FoodState, FoodActionType, FOOD_SUCCESS, FOOD_DELETE, FOOD_PENDING, FOOD_ERROR, CLEAR_ERROR } from "./types";

const initialState: FoodState = {
    food: [],
    loading: true,
    error: null
};

export const foodReducer = (state = initialState, action: FoodActionType): FoodState => {
    switch (action.type) {
        case FOOD_SUCCESS:
            return {
                food: action.payload,
                loading: false,
                error: null
            };
        case FOOD_DELETE:
            return {
                ...state,
                food: state.food.filter(({ _id }) => action.payload !== _id),
            };
        case FOOD_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case FOOD_PENDING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default: return state;
    }
}
