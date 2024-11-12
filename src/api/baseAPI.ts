
const BASE_URL = import.meta.env.VITE_BASE_URL;

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
        if (errorData.message === 'Неверное имя пользователя или пароль') {
          throw new Error('Неверное имя пользователя или пароль');
        }
        throw new Error(errorData.message || 'Request failed');      
      } 
      return response.json();
  } catch (error: unknown){
      const message = error instanceof Error ? error.message : 'Unexpected error occurred';
      throw new Error(message);
  }
    
};