import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000/auth';

export const loginService = async (formData) => {
  try {
    // Виконуємо POST-запит на сервер з даними форми
    const response = await axios.post(API_URL, formData);
    // Перевіряємо, чи успішно авторизовано користувача
    if (response.status === 200) {
      // Якщо так, повертаємо дані користувача
      return response.data;
    } else {
      // Якщо авторизація не вдалась, виводимо сповіщення про помилку
      throw new Error('Authentication failed');
    }
  } catch (error) {
    // Якщо виникла помилка при виконанні запиту, виводимо сповіщення про помилку за допомогою toast
    toast.error('Authentication failed');
    throw error;
  }
};

