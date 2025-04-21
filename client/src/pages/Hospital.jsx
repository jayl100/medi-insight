import styled from 'styled-components';
import useHospital from '../hooks/useHospital.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HospitalList from '../components/common/hospital/HospitalList.jsx';

function Hospital({ className }) {
  const navigate = useNavigate();
  const { isMeta, isHospitals, fetchHospitals } = useHospital();
  console.log(isHospitals);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get('page') || '1', 10);
    const limit = parseInt(params.get('limit') || '10', 10);
    fetchHospitals(page, limit);
  }, [location.search]);

  const handlePageChange = (page, limit) => {
    navigate(`/posts?page=${ page }&limit=${ limit }`);
  }

  return (
    <ListStyled className={className}>
      <h1>Hospitals</h1>
      <HospitalList hospitals={isHospitals}/>
    </ListStyled>
  );
}

const ListStyled = styled.div`

`;

export default Hospital;