import styled from 'styled-components';
import useHospital from '../hooks/useHospital.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HospitalList from '../components/hospital/HospitalList.jsx';
import Pagination from '../components/Pagination.jsx';

function Hospital({ className }) {
  const navigate = useNavigate();
  const { isMeta, isHospitals, fetchHospitals } = useHospital();

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
      <TitleStyled>Hospitals</TitleStyled>
      <HospitalList hospitals={isHospitals}/>
      {/*<Pagination/>*/}
    </ListStyled>
  );
}

const ListStyled = styled.div`

`;

const TitleStyled = styled.h1`
  margin-bottom: 4rem;
`

export default Hospital;