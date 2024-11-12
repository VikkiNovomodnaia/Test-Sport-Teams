import { createAsyncThunk } from '@reduxjs/toolkit'
import { signInApi } from '../../../api/auth/SignIn'
import { signUpApi } from '../../../api/auth/SignUp'

export const signIn = createAsyncThunk(
	'auth/signIn',
	async (loginData: { login: string; password: string }, thunkAPI) => {
		try{
			const response = await signInApi(loginData)
			return { user: response.user, token: response.token };
		} catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message || 'Failed to sign in');
    }
	}
)

export const signUp = createAsyncThunk(
	'auth/signUp',
	async (userData: { UserName: string, login: string; password: string }, thunkAPI) => {
		try{
			const response = await signUpApi(userData)
			return { user: response.user, token: response.token };
		} catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message || 'Failed to sign up');
    }
	}
)