import axios from "axios";

const BASE_URL = "http://localhost:3000/hall"; 

export const getHallInfoByScreeningId = async (screeningId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${screeningId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
