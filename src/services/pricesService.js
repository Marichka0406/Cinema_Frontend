import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000/prices';

// Отримання всіх цін
export const getAllPrices = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        toast.error('Error while fetching prices');
        throw error;
    }
};

// Створення нової ціни
export const createPrice = async (priceData) => {
    try {
        const response = await axios.post(API_URL, priceData);
        toast.success('Price created successfully');
        return response.data;
    } catch (error) {
        toast.error('Error while creating price');
        throw error;
    }
};

// Оновлення ціни за ID
export const updatePrice = async (priceId, priceData) => {
    try {
        const response = await axios.put(`${API_URL}/${priceId}`, priceData);
        toast.success('Price updated successfully');
        return response.data;
    } catch (error) {
        toast.error('Error while updating price');
        throw error;
    }
};

// Видалення ціни за ID
export const deletePrice = async (priceId) => {
    try {
        const response = await axios.delete(`${API_URL}/${priceId}`);
        toast.success('Price deleted successfully');
        return response.data;
    } catch (error) {
        toast.error('Error while deleting price');
        throw error;
    }
};
