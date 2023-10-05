import axios, { AxiosResponse } from 'axios';
import { AuthResponse } from 'src/shared/types';
import { API_BASE } from 'src/utils';

const postLoginData = async (email: string, password: string): Promise<AuthResponse> => {
    try {
        const response: AxiosResponse<AuthResponse> = await axios.post(`${API_BASE}/auth/login`, {
            email,
            password
        });
        return response.data;
    } catch (error: any) {
        if (error && error.response) {
            throw error.response.data;
        }
        throw error;
    }

}

interface UserDataType {
    firstName: string;
    lastName: string;
    email: string,
    password: string,
    username: string,
    bio?: string,
    sex: string,
    age: number,
    height: number,
    weight: number,
    phone?: number
}

const postSignUpData = async (userData: UserDataType): Promise<AuthResponse> => {
    try {
        const response: AxiosResponse<AuthResponse> = await axios.post(`${API_BASE}/auth/signup`, {
            ...userData
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

const getUser = async (authToken: string): Promise<AuthResponse> => {
    try {
        const response: AxiosResponse<AuthResponse> = await axios.get(`${API_BASE}/auth/me`, {
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

export { postLoginData, postSignUpData, getUser };