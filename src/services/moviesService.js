import axios from 'axios';
const API_URL = 'http://localhost:3000/movies';

export const getAllMovies = async () => {
    try {
        const response = await axios.get(API_URL); 
        return response.data;
    } catch (error) {
        console.error('Помилка отримання даних про фільми:', error);
        throw error;
    }
};
