import { USER_SUCCESS, USER_PENDING, USER_ERROR, UserActionType, UserState } from "./types";

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action: UserActionType): UserState => {
    switch (action.type) {
        case USER_SUCCESS:
            return {
                user: action.payload,
                loading: false,
                error: null
            };
        case USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case USER_PENDING:
            return {
                ...state,
                loading: true
            }
        default: return state;
    }
}
