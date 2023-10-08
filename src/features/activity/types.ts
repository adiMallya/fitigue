//shape of activity data
export interface ActivityData {
    _id: string;
    name: string;
    duration: number;
    calories: number;
    [key: string]: any;
}

// shape of user state
export interface ActivityState {
    activities: ActivityData[];
    loading: boolean;
    error: string | null;
}

// action types
export const ACTIVITY_SUCCESS = 'activity/success';
export const ACTIVITY_PENDING = 'activity/pending';
export const ACTIVITY_ERROR = 'activity/error';
export const ACTIVITY_DELETE = 'activity/delete';
export const CLEAR_ERROR = 'clear/error';

interface ActivitySuccessAction {
    type: typeof ACTIVITY_SUCCESS;
    payload: ActivityData[];
}

interface ActivityDeleteAction {
    type: typeof ACTIVITY_DELETE;
    payload: string;
}

interface ActivityErrorAction {
    type: typeof ACTIVITY_ERROR;
    payload: string
}

interface ActivityPendingAction {
    type: typeof ACTIVITY_PENDING;
}

interface ClearErrorAction {
    type: typeof CLEAR_ERROR;
}

export type ActivityActionType = ActivitySuccessAction | ActivityDeleteAction | ActivityPendingAction | ActivityErrorAction | ClearErrorAction;
