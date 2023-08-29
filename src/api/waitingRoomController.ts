import { baseAxios } from './baseAxios';

export const getFirstWaitingPosition = async () => {
  const response = await baseAxios
    .get('/api/waiting-room/cur')
    .then((response) => response.data.data);
  console.log(response);
  return response;
};

export const getNowWaitingPosition = async (position: number) => {
  const response = await baseAxios
    .get(`/api/waiting-room/${position}`)
    .then((response) => response.data.data);
  console.log(response);
  return response;
};
