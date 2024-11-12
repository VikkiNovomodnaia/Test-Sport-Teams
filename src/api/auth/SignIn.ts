import { baseApi } from '../baseAPI'

export const signInApi = async (loginData: { login: string; password: string }) => {
  const response = await baseApi('auth/SignIn', {
    method: 'POST',
    body: JSON.stringify(loginData,),
  });
  return response;
}; 

