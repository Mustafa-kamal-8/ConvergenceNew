import axios from 'axios';


const API_BASE_URL = process.env.VITE_API_BASE_URL;

export const getMasterData = async () => {
  
    const response = await axios.post(`${API_BASE_URL}/master/get`);
    return response.data; 

};

export default { getMasterData };
