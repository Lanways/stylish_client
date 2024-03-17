import axios from 'axios';
import axiosInstance, { baseUrl } from './axiosInstance';

export const login = async ({ email, password }) => {
  try {
    const {
      data: { data },
    } = await axios.post(`${baseUrl}/user/signin`, {
      email,
      password,
    });
    console.log(data);

    const { token } = data;
    console.log(token);
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[Login Failed]:', error);
    return { success: false, error };
  }
};

export const googleLogin = async () => {
  try {
    window.location.href = `${baseUrl}/auth/google`;
  } catch (error) {
    console.error('[Login Failed]:', error);
    return { success: false, error };
  }
};

export const getUserToken = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/user/token`);
    return res.data.data;
  } catch (error) {
    console.error('[Get User Token Failed]:', error);
  }
};
