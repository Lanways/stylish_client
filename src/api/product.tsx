import axios from 'axios';

const baseURL = 'https://stylish-api.onrender.com/';

export const getSingleProduct = async (id: string) => {
  try {
    const { data } = await axios.get(`${baseURL}api/product/${id}`);
    return data.data;
  } catch (error) {
    console.error('[Get Product Data failed]: ', error);
  }
};
