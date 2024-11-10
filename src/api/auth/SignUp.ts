import { baseApi } from '../baseAPI'

export const signUp = async (userData: { UserName: string, login: string, password: string}) => {
	return baseApi( 'auth/SignUp', {
		method: 'POST',
		body: JSON.stringify(userData)
	})
} 