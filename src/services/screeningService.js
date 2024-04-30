import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000/screenings';

export const getScreeningsByMovieId = async (movieId) => { 
    try {
        const token = sessionStorage.getItem('role'); // Отримуємо роль з sessionStorage
        const response = await axios.get(`${API_URL}/${movieId}`, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        }); 
        return response.data;
    } catch (error) {
        toast.error('Error while receiving screenings data');
        throw error;
    }
};
