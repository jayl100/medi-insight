import styled from 'styled-components';
import useHospital from '../hooks/useHospital.jsx';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HospitalList from '../components/hospital/HospitalList.jsx';
import Pagination from '../components/Pagination.jsx';

function Hospital({ className }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMeta, isHospitals, fetchHospitals } = useHospital();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page') || '1', 10);
    const limit = parseInt(params.get('limit') || '10', 10);
    fetchHospitals(page, limit);
  }, [location.search]);


  const handlePageChange = (page, limit = 20) => {
    navigate(`/hospitals?page=${page}&limit=${limit}`);
  };

  return (
    <ListStyled className={className}>
      <TitleStyled>Hospitals</TitleStyled>
      <HospitalList hospitals={isHospitals} />
      <PaginationWrapperStyled>
        <Pagination
          total={isMeta.totalPages}
          current={isMeta.currentPage}
          onChange={(page) => handlePageChange(page)}
        />
      </PaginationWrapperStyled>
    </ListStyled>
  );
}

const ListStyled = styled.div`

`;

const TitleStyled = styled.h1`
    margin-bottom: 4rem;
`;

const PaginationWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

export default Hospital;