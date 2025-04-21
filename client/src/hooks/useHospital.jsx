import { getHospitalDetail, getHospitalList } from '../api/hospital.api.js';
import { useState } from 'react';

const useHospital = () => {
  const [isHospitals, setIsHospitals] = useState([]);
  const [isHospitalDetail, setIsHospitalDetail] = useState({
    device_list: [],
  });  const [isMeta, setIsMeta] = useState({
    totalPages: 0,
    totalItems: 0,
    currentPage: 1,
  });

  const fetchHospitals = async (page, limit) => {
    try {
      const res = await getHospitalList(page, limit);
      setIsHospitals(res.data);
      setIsMeta(res.meta);

    } catch (err) {
      console.error(err);
    }
  }

  const fetchHospitalDetail = async (id) => {
    try {
      const res = await getHospitalDetail(id);
      setIsHospitalDetail(res.data)
    } catch (err) {
      console.error(err);
    }
  }

  return {
    fetchHospitals,
    isHospitals,
    isMeta,
    isHospitalDetail,
    fetchHospitalDetail,
  }
}

export default useHospital;