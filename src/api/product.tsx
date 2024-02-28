import axios from 'axios';
import axiosInstance, { baseUrl } from './axiosInstance';

const baseURL = 'https://www.ezstylish.com/';

export const getSingleProduct = async (id: string) => {
  try {
    const { data } = await axios.get(`${baseURL}api/product/${id}`);
    return data.data;
  } catch (error) {
    console.error('[Get Product Data failed]: ', error);
  }
};

export const postCartItem = async (skus: number, quantity: number) => {
  try {
    const data = await axiosInstance.post(`${baseUrl}/cartItem`, {
      skuId: String(skus),
      quantity: String(quantity),
    });
    console.log(data);
  } catch (error) {
    console.error('[Item Post Failed]:', error);
  }
};
