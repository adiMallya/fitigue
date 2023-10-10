import { GoalState, GoalActionType, GOAL_SUCCESS, GOAL_DELETE, GOAL_PENDING, GOAL_ERROR, CLEAR_ERROR } from "./types";

const initialState: GoalState = {
    goals: [],
    loading: true,
    error: null
};

export const goalReducer = (state = initialState, action: GoalActionType): GoalState => {
    switch (action.type) {
        case GOAL_SUCCESS:
            return {
                goals: action.payload,
                loading: false,
                error: null
            };
        case GOAL_DELETE:
            return {
                ...state,
                goals: state.goals.filter(({ _id }) => action.payload !== _id),
            };
        case GOAL_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case GOAL_PENDING:
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
