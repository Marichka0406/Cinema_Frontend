import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000/movies';

export const getAllMovies = async () => {
    try {
        const token = sessionStorage.getItem('role'); // Отримуємо роль з sessionStorage
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        }); 
        return response.data;
    } catch (error) {
        toast.error('Error while receiving data about movies');
        throw error;
    }
};

export const createMovie = async (formData) => {
    try {
        const token = sessionStorage.getItem('role'); // Отримуємо роль з sessionStorage
        const response = await axios.post(API_URL, formData, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        }); 
        toast.success('Movies was created successfully');
        return response.data;
    } catch (error) {
        toast.error('Error while creating movie');
        throw error;
    }
};

export const updateMovie = async (id, formData) => {
    const url = `${API_URL}/${id}`;
    try {
        const token = sessionStorage.getItem('role'); // Отримуємо роль з sessionStorage
        const response = await axios.put(url, formData, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        }); 
        toast.success('Movie was updated successfully');
        return response.data;
    } catch (error) {
        toast.error('Error while updating movie');
        throw error;
    }
};

export const deleteMovie = async (id) => {
    const url = `${API_URL}/${id}`;
    try {
        const token = sessionStorage.getItem('role'); // Отримуємо роль з sessionStorage
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        }); 
        toast.success('Movie was deleted successfully');
        return response.data;
    } catch (error) {
        toast.error('Error while deleting movie');
        throw error;
    }
};
