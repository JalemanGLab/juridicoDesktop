import api from "../../utils/axiosConfig";

export const ApiUser = {
    login: async (data: any) => {
        const response = await api.post('/login', data);
        return response.data;
    }
}
