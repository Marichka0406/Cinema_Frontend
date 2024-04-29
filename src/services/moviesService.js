import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000/movies';

export const getAllMovies = async () => {
    try {
        const response = await axios.get(API_URL); 
        return response.data;
    } catch (error) {
        toast.error('Error while receiving data about movies');
        throw error;
    }
};
