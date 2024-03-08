import axios from 'axios';
import { baseUrl } from './axiosInstance';

export const getShipping = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${baseUrl}/shippingFee/`);
    console.log(data);
    return data;
  } catch (error) {
    console.error('[Get Shipping Data failed]: ', error);
  }
};
