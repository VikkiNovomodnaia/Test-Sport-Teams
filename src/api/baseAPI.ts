const BASE_URL =import.meta.env.VITE_BASE_URL;

export const baseApi = async (endpoint: string, options: RequestInit) => {
	const url = `${BASE_URL.replace(/\/$/, '')}/${endpoint}`;

  const response = await fetch( url , {...options,
    headers: {
      'Content-Type': 'applications/json',
      ...(options.headers || {}),
    },
  });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData || 'Request failed');
    }
    return response.json();
};