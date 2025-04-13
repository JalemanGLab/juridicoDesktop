import api from "../../utils/axiosConfig";
import { LoginRequests, LoginResponses } from "../types/Auth";

const ApiAuth = () => {
	const login = async (data: LoginRequests) => {
		try {
			const response = await api.post<LoginResponses>('/auth/login', data);

			return response.data;
		} catch (error: any) {
			throw error.response.data;
		}
	}

	return {
		login
	};
}

export default ApiAuth;
