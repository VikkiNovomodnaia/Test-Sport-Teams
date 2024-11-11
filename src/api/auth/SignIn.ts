
import { createAsyncThunk } from '@reduxjs/toolkit'
import { baseApi } from '../baseAPI'

export const signIn = createAsyncThunk(
  'auth/signIn', 
  async (loginData: {login:string, password: string}) => {
      const response = await baseApi('auth/SignIn', {
        method: 'POST',
        body: JSON.stringify(loginData),
      });
      return response; 
    } 
);
