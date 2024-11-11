import { setError } from '../redux/slices/errorSlice'
import store from '../redux/store'

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://dev.trainee.dex-it.ru/api/';
export const baseApi = async (endpoint: string, options: RequestInit) => {
  try{
    const response = await fetch( `${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });
      if (!response.ok) {
        const errorData = await response.json();
        store.dispatch(setError(errorData.message || 'Request failed'))
        throw new Error(errorData.message || 'Request failed');      
      } 
      return response.json();
  }
   catch (error){
    store.dispatch(setError((error as Error).message || 'Unexpected error occurred'))
    throw error;
  }
    
};