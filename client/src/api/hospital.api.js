import requestHandler from './http.js';

export const getHospitalList = async(page, limit, { deviceIds, region } = {}) => {
  const params = new URLSearchParams();
  params.set('page', page);
  params.set('limit', limit);
  if (Array.isArray(deviceIds)) {
    deviceIds.forEach(id => Number.isInteger(id) && params.append('device_id', String(id)));
  } else if (Number.isInteger(deviceIds)) {
    params.set('device_id', String(deviceIds));
  }
  // region
  if (region && region.trim()) {
    params.set('region', region.trim());
  }
  const response = await requestHandler('get', `/hospitals?${params.toString()}`);
  return response.data;
};

export const getHospitalDetail = async(id) => {
  const response = await requestHandler('get', `/hospitals/${id}`);
  return response.data;
};

export const getDeviceList = async() => {
  const response = await requestHandler('get', `/devices`);
  return response.data;
}