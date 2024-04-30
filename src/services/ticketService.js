import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000';

export const createTicket = async (formData) => {
  try {
    const token = sessionStorage.getItem('role'); // Отримуємо роль з sessionStorage
    const response = await axios.post(`${API_URL}/tickets`, formData, {
        headers: {
            Authorization: `Bearer ${token}` 
        }
    });
    toast.success('Ticket was bought successfully');
    return response.data;
  } catch (error) {
    toast.error('Error creating ticket');
    throw error;
  }
};

export const getTicketsByScreeningId = async (screeningId) => {
  try {
    const token = sessionStorage.getItem('role'); // Отримуємо роль з sessionStorage
    const response = await axios.get(`${API_URL}/tickets/${screeningId}`, {
        headers: {
            Authorization: `Bearer ${token}` 
        }
    });
    return response.data;
  } catch (error) {
    toast.error('Error while receiving tickets data');
    throw error;
  }
};
