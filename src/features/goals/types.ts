//shape of goal data
export type Status = 'In Progress' | 'Acheived' | 'Abandoned';

export interface GoalData {
    _id: string;
    name: string;
    description: string;
    targetDate: string;
    targetCalories: number;
    status: Status;
    [key: string]: any;
}

// shape of goal state
export interface GoalState {
    goals: GoalData[];
    loading: boolean;
    error: string | null;
}

// action types
export const GOAL_SUCCESS = 'goal/success';
export const GOAL_PENDING = 'goal/pending';
export const GOAL_ERROR = 'goal/error';
export const GOAL_DELETE = 'goal/delete';
export const CLEAR_ERROR = 'clear/error';

interface GoalSuccessAction {
    type: typeof GOAL_SUCCESS;
    payload: GoalData[];
}

interface GoalDeleteAction {
    type: typeof GOAL_DELETE;
    payload: string;
}

interface GoalErrorAction {
    type: typeof GOAL_ERROR;
    payload: string
}

interface GoalPendingAction {
    type: typeof GOAL_PENDING;
}

interface ClearErrorAction {
    type: typeof CLEAR_ERROR;
}

export type GoalActionType = GoalSuccessAction | GoalUpdateAction | GoalDeleteAction | GoalPendingAction | GoalErrorAction | ClearErrorAction;
