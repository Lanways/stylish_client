import axios from 'axios';
import { baseUrl } from './axiosInstance';

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
