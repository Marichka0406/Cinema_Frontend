import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000/actors';

export const getAllActors = async () => {
    try {
        const token = sessionStorage.getItem('role'); // Отримуємо роль з sessionStorage
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        }); 
        return response.data;
    } catch (error) {
        toast.error('Error while fetching actors');
        throw error;
    }
};
