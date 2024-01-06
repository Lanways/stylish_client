import axios from 'axios';

const baseURL = 'https://stylish-api.onrender.com/';

export const getProducts = async (
  pageParam: number = 1,
  limit: number = 5,
  categoryId: number = 1
) => {
  try {
    const { data } = await axios.get(
      `${baseURL}api/product/?page=${pageParam}&limit=${limit}&categoryId=${categoryId}`
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
