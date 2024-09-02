const client_id = process.env.DEV_TO_API_KEY;
const url = `https://dev.to/api/articles/me`;

export const getArticles = async () => {
  try {
    const headers = new Headers();
    headers.append('api-key', client_id || ''); // Handle case where client_id is undefined

    const response = await fetch(url, {
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return null; // or throw error if you want to handle it elsewhere
  }
};
