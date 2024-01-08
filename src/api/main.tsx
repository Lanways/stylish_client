import axios from 'axios';
//types
import { ProductParam } from '../types/type';

const baseURL = 'https://stylish-api.onrender.com/';

export const getProducts = async ({
  page = 1,
  limit = '',
  categoryId = '',
}: ProductParam) => {
  try {
    const { data } = await axios.get(
      `${baseURL}api/product/?page=${page}${limit}${categoryId}`
    );
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error('[Get Products Data failed]: ', error);
  }
};

export const getCategory = async () => {
  try {
    const { data } = await axios.get(`${baseURL}api/category`);
    return data.data;
  } catch (error) {
    console.error('[Get Products Data failed]: ', error);
  }
};
