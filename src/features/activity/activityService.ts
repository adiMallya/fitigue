import axios, { AxiosResponse } from 'axios';
import { GenericResponse } from 'src/shared/types';
import { API_BASE } from 'src/utils';

const getActivityData = async (authToken: string): Promise<GenericResponse> => {
    try {
        const response: AxiosResponse<GenericResponse> = await axios.get(`${API_BASE}/exercises`, {
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

const postActivity = async (name: string, duration: number, authToken: string): Promise<GenericResponse> => {
    try {
        const response: AxiosResponse<GenericResponse> = await axios.post(`${API_BASE}/exercises`, {
            name, duration
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

const deleteActivity = async (activityId: string, authToken: string): Promise<AxiosResponse> => {
    try {
        const response: AxiosResponse = await axios.post(`${API_BASE}/exercises/${activityId}`, {
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

export { getActivityData, postActivity, deleteActivity };