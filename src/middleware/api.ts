import axios from 'axios';
export async function get_word(url:string): Promise<any> {
    const options = {
        method: 'GET',
        url: `https://random-word-api.p.rapidapi.com/${url}`,
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_APP_X_RapidAPI_Key,
          'X-RapidAPI-Host': import.meta.env.VITE_APP_X_RapidAPI_Host
        }
    };
      
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
