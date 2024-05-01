import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; 

export const StatisticsService = {
  getTicketCountForLastMonth: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/statistics`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getTicketCountPerMovie: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/statistics/ticket-count-per-movie`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getTicketCountsByTimeOfDay: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/statistics/ticket-counts-by-time-of-day`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getTotalRevenueLastMonth: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/statistics/total-revenue-last-month`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
};
