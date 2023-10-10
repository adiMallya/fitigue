import axios, { AxiosResponse } from 'axios';
import { GenericResponse } from 'src/shared/types';
import { API_BASE } from 'src/utils';

const getGoalsData = async (authToken: string): Promise<GenericResponse> => {
    try {
        const response: AxiosResponse<GenericResponse> = await axios.get(`${API_BASE}/goals`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
        return response.data;
    } catch (error: any) {
        if (error && error.response) {
            throw error.response.data;
        }
        throw error;
    }

}

const postGoal = async (name: string, description: string, targetDate: string, targetCalories: number, authToken: string): Promise<GenericResponse> => {
    try {
        const response: AxiosResponse<GenericResponse> = await axios.post(`${API_BASE}/goals`, {
            name, description, targetDate, targetCalories
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
        return response.data;
    } catch (error: any) {
        if (error && error.response) {
            throw error.response.data;
        }
        else {
            console.error(error);
            throw error;
        }
    }

};

const updateGoalStatus = async (goalId: string, status: 'In Progress' | 'Acheived' | 'Abandoned', authToken: string): Promise<GenericResponse> => {
    try {
        const response: AxiosResponse<GenericResponse> = await axios.post(`${API_BASE}/goals/${goalId}`, null, {
            params: {
                status
            },
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
        return response.data;
    } catch (error: any) {
        if (error && error.response) {
            throw error.response.data;
        }
        else {
            console.error(error);
            throw error;
        }
    }
}

const deleteGoal = async (goalId: string, authToken: string): Promise<AxiosResponse> => {
    try {
        const response: AxiosResponse = await axios.delete(`${API_BASE}/goals/${goalId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
        return response;
    } catch (error: any) {
        if (error && error.response) {
            throw error.response.data;
        }
        else {
            console.error(error);
            throw error;
        }
    }

};

export { getGoalsData, postGoal, updateGoalStatus, deleteGoal };