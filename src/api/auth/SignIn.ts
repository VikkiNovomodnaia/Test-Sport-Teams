import { apiFetch } from '../baseAPI'

export const signIn = async (credentials: {login:string, password: string}) => {
  console.log('Sending data to server:', credentials);

 return apiFetch('auth/SignIn',{
  method: 'POST',
  headers:{
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(credentials)
 })
}
