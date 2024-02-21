import axios from 'axios';
// import axiosInstance from './axiosInstance';

const authURL = 'https://stylish-api.onrender.com/api';

export const login = async ({ email, password }) => {
  try {
    const {
      data: { data },
    } = await axios.post(`${authURL}/user/signin`, {
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
