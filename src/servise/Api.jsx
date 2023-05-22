import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=34500293-b03de9e828113a4f3f2acb0b8&image_type=photo&orientation=horizontal';

export const getImages = async (query, page) => {
  try {
    const response = await axios.get(`&per_page=12&q=${query}&page=${page}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
