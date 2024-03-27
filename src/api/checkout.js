import axios from 'axios';
import axiosInstance, { baseUrl } from './axiosInstance';

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

export const postOrder = async ({
  total,
  recipient,
  address,
  number,
  payment,
  orderItems,
  shippingFeeId,
  email
}) => {
  try {
    const data = await axiosInstance.post(`${baseUrl}/order/encryption`, {
      order: {
        totalPrice: total,
        status: 'Pending',
      },
      shipping: {
        recipient: recipient,
        address: address,
        telephone: number,
      },
      payment: {
        amount: total,
        provider: payment,
        status: 'Pending',
      },
      orderItems: orderItems,
      shippingFeeId: shippingFeeId,
      email
    });
    return data;
  } catch (error) {
    console.error('[Order Failed]:', error);
  }
};

export const checkOrder = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/order/check/${id}`);
    console.log(data);
    return data.data;
  } catch (error) {
    console.error('checkorder error', error);
  }
}