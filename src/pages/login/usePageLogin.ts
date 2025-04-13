import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ApiAuth from "../../api/auth/ApiAuth";
import { LoginForm } from "./DTO/loginDTO";
import { useState } from "react";
const usePageLogin = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { login } = ApiAuth();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginForm>();
	const navigate = useNavigate();
	const onSubmit = async (data: LoginForm) => {
		try {
			setIsLoading(true);
			const response = await login(data);
			console.log('response', response);
			if (response?.status === "success") {
				localStorage.setItem('authToken', response.data.token);
				toast.success("Inicio de sesión exitoso");
				navigate('/dashboard');
			} else {
				toast.error(response?.message || "Error al iniciar sesión");
			}
		} catch (error: any) {
			toast.error(error?.message || "Error en la solicitud");
		} finally {
			setIsLoading(false);
		}
	}

	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
		isLoading,
		Toaster

	};
}

export default usePageLogin;