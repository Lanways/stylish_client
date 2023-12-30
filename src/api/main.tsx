import axios from 'axios';

const baseURL = 'https://stylish-api.onrender.com/';

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${baseURL}api/product`);
    return data.data;
  } catch (error) {
    console.error('[Get Products Data failed]: ', error);
  }
};
