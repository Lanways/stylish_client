import axiosInstance, { baseUrl } from './axiosInstance';

export const getCart = async () => {
  try {
    const {
      data: { data },
    } = await axiosInstance.get(`${baseUrl}/cart`);
    return data.CartItems;
  } catch (error) {
    console.error('[Get Product Data failed]: ', error);
  }
};
