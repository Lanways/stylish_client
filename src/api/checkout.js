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

export const postOrder = async (
  total,
  recipient,
  address,
  number,
  payment,
  orderItems,
  shippingFeeId
) => {
  try {
    const data = await axiosInstance.post(`${baseUrl}/order`, {
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
    });
    console.log(data);
  } catch (error) {
    console.error('[Order Failed]:', error);
  }
};
