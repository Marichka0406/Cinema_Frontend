import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000/screenings';

// Отримання списку сеансів за ID фільму
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

// Отримання сеансу за датою та назвою фільму
export const getScreeningByDateAndMovieTitle = async (date, movieTitle) => {
    try {
        const response = await axios.get(`${API_URL}?date=${date}&movieTitle=${movieTitle}`);
        return response.data;
    } catch (error) {
        toast.error('Error while receiving screening data');
        throw error;
    }
};

// Створення нового сеансу
export const createScreening = async (screeningData) => {
    try {
        const response = await axios.post(API_URL, screeningData);
        toast.success('Screening created successfully');
        return response.data;
    } catch (error) {
        toast.error('Error while creating screening');
        throw error;
    }
};

// Оновлення інформації про сеанс
export const updateScreening = async (screeningId, screeningData) => {
    try {
        const response = await axios.put(`${API_URL}/${screeningId}`, screeningData);
        toast.success('Screening updated successfully');
        return response.data;
    } catch (error) {
        toast.error('Error while updating screening');
        throw error;
    }
};

// Видалення сеансу за ID
export const deleteScreening = async (screeningId) => {
    try {
        const response = await axios.delete(`${API_URL}/${screeningId}`);
        toast.success('Screening deleted successfully');
        return response.data;
    } catch (error) {
        toast.error('Error while deleting screening');
        throw error;
    }
};

// Отримання всіх сеансів
export const getAllScreenings = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        toast.error('Error while receiving all screenings data');
        throw error;
    }
};
