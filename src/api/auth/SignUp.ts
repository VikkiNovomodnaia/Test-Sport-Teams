import { baseApi } from '../baseAPI'

export const signUpApi = async (userData: { UserName: string, login: string, password: string}) => {
	const response = await baseApi( 'auth/SignUp', {
		method: 'POST',
		body: JSON.stringify(userData)
	})
	return response;
} 