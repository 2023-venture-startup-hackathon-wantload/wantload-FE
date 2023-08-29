import { baseAxios } from './baseAxios';

export const getFortuneItems = async () => {
  const response = await baseAxios
    .get('/api/fortune')
    .then((response) => response.data.data);
  console.log(response);
  return response;
};
