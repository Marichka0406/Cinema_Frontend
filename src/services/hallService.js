import axios from "axios";
import { toast } from 'react-toastify';

const BASE_URL = "http://localhost:3000/hall"; 

export const getHallInfoByScreeningId = async (screeningId) => {
  try {
    const token = sessionStorage.getItem('role'); // Отримуємо роль з sessionStorage
    const response = await axios.get(`${BASE_URL}/${screeningId}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error.response.data.message;
  }
};

export const getHallInfoByNumber = async (hallNumber) => {
  try {
    const token = sessionStorage.getItem('role'); // Отримуємо роль з sessionStorage
    const response = await axios.get(`${BASE_URL}/${hallNumber}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error.response.data.message;
  }
};