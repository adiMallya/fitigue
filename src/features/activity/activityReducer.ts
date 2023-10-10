import { ActivityState, ActivityActionType, ACTIVITY_SUCCESS, ACTIVITY_DELETE, ACTIVITY_PENDING, ACTIVITY_ERROR, CLEAR_ERROR } from "./types";

const initialState: ActivityState = {
    activities: [],
    loading: true,
    error: null
};

export const activityReducer = (state = initialState, action: ActivityActionType): ActivityState => {
    switch (action.type) {
        case ACTIVITY_SUCCESS:
            return {
                activities: action.payload,
                loading: false,
                error: null
            };
        case ACTIVITY_DELETE:
            return {
                ...state,
                activities: state.activities.filter(({ _id }) => action.payload !== _id),
            };
        case ACTIVITY_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case ACTIVITY_PENDING:
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
