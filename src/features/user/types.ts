import { UserDataType } from "src/shared";

export interface ProfileData extends UserDataType {
    totalCaloriesBurned: number,
    totalCaloriesConsumed: number,
    totalCalorieGoal: number
}
// shape of user state
export interface UserState {
    user: ProfileData | null;
    loading: boolean;
    error: string | null;
}
// action types
export const USER_SUCCESS = 'user/success';
export const USER_PENDING = 'user/pending';
export const USER_ERROR = 'user/error';

interface UserSuccessAction {
    type: typeof USER_SUCCESS;
    payload: ProfileData
}

interface UserErrorAction {
    type: typeof USER_ERROR;
    payload: string
}

interface UserPendingAction {
    type: typeof USER_PENDING;
}

export type UserActionType = UserSuccessAction | UserPendingAction | UserErrorAction;
