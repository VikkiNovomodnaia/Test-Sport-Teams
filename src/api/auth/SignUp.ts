import { apiFetch } from '../baseAPI'

export const signUp = async (userData: { UserName: string, login: string, password: string}) => {
	console.log('Sending data to server:', userData);

	return apiFetch( 'auth/SignUp', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData)
	})
} 