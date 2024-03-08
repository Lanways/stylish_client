import axios from 'axios';
import { baseUrl } from './axiosInstance';
//types
import { ProductParam } from '../types/type';

export const getProducts = async ({
  page = 1,
  limit = '',
  categoryId = '',
}: ProductParam) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/product/?page=${page}${limit}${categoryId}`
    );
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error('[Get Products Data failed]: ', error);
  }
};

export const getCategory = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/category`);
    return data.data;
  } catch (error) {
    console.error('[Get Products Data failed]: ', error);
  }
};
