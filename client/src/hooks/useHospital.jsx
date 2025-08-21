import { getDeviceList, getHospitalDetail, getHospitalList } from '../api/hospital.api.js';
import { useCallback, useState } from 'react';

const useHospital = () => {
  const [isHospitals, setIsHospitals] = useState([]);
  const [isDevices, setIsDevices] = useState([]);
  const [isHospitalDetail, setIsHospitalDetail] = useState({
    device_list: [],
  });
  const [isMeta, setIsMeta] = useState({
    totalPages: 0,
    totalItems: 0,
    currentPage: 1,
  });

  const fetchDevicesList = async () => {
    try {
      const res = await getDeviceList();
      console.log('fetchDevicesList', res.data);
      setIsDevices(res.data);
    } catch (error) {
      console.error('API ERROR :: ', error);
    }
  }

  const fetchHospitals = useCallback( async (page, limit, { device, region } = {}) => {
    try {
      const res = await getHospitalList(page, limit, { device, region });
      setIsHospitals(res.data);
      setIsMeta(res.meta);

    } catch (error) {
      console.error('API ERROR :: ', error);
    }
  }, [])

  const fetchHospitalDetail = async (id) => {
    try {
      const res = await getHospitalDetail(id);
      setIsHospitalDetail(res.data)
    } catch (error) {
      console.error('API ERROR :: ', error);
    }
  }

  return {
    isHospitals,
    isMeta,
    isHospitalDetail,
    isDevices,
    fetchHospitals,
    fetchHospitalDetail,
    fetchDevicesList,
  }
}

export default useHospital;