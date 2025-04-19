import requestHandler from './http.js';

export const getHospitalList = async (page, limit) => {
  const response = await requestHandler('get', `/hospitals?page=${page}&limit=${limit}`);
  return response.data;
}

export const getHospitalDetail = async (id) => {
  const response = await requestHandler('get', `/hospitals/${id}`);
  return response.data;
}