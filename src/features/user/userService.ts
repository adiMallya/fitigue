import axios, { AxiosResponse } from 'axios';
import { GenericResponse } from 'src/shared/types';
import { API_BASE } from 'src/utils';

const getUser = async (authToken: string): Promise<GenericResponse> => {
    try {
        const response: AxiosResponse<GenericResponse> = await axios.get(`${API_BASE}/auth/me`, {
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

export { getUser };