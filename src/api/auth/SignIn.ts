import { baseApi } from '../baseAPI'

export const signIn = async (loginData: {login:string, password: string}) => {
 return baseApi('auth/SignIn',{
  method: 'POST',
  body: JSON.stringify(loginData)
 })
}
