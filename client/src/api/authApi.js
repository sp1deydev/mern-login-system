import axiosClient from "./axiosClient";

export const authApi = {
    login: (data) => {
        return axiosClient.post('/login', data);
    },
    register: (data) => {
        return axiosClient.post('/signup', data);
    },
    getCurrentUser: () => {
        return axiosClient.get('/get-user');
    },
    logout: () => {
        return axiosClient.get('/logout');
    }
}