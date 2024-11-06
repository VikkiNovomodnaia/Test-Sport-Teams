
const BASE_URL:string = 'http://dev.trainee.dex-it.ru/api/';

export const apiFetch = async (endpoint: string, options: RequestInit) => {
	const url = `${BASE_URL.replace(/\/$/, '')}/${endpoint}`;

  const response = await fetch( url , options);
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    return response.json();
};