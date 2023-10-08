import axios, { AxiosResponse } from 'axios';
import { GenericResponse } from 'src/shared/types';
import { API_BASE } from 'src/utils';

const getFoodData = async (authToken: string): Promise<GenericResponse> => {
    try {
        const response: AxiosResponse<GenericResponse> = await axios.get(`${API_BASE}/food`, {
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

const postFood = async (name: string, carbs: number, proteins: number, fats: number, authToken: string): Promise<GenericResponse> => {
    try {
        const response: AxiosResponse<GenericResponse> = await axios.post(`${API_BASE}/food`, {
            name, carbs, proteins, fats
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

const deleteFood = async (foodId: string, authToken: string): Promise<AxiosResponse> => {
    try {
        const response: AxiosResponse = await axios.delete(`${API_BASE}/food/${foodId}`, {
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

export { getFoodData, postFood, deleteFood };