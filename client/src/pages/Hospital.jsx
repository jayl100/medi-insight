import styled from 'styled-components';
import useHospital from '../hooks/useHospital.jsx';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HospitalList from '../components/hospital/HospitalList.jsx';
import Pagination from '../components/Pagination.jsx';
import HospitalFilter from '../components/hospital/HospitalFilter.jsx';

function Hospital({ className }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMeta, isHospitals, fetchHospitals } = useHospital();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page') || '1', 10);
    const limit = parseInt(params.get('limit') || '10', 10);
    const deviceIds = params.getAll('device_id').map(v => parseInt(v, 10))
    const region = params.get('region') || undefined;

    fetchHospitals(page, limit, { deviceIds, region });
  }, [location.search]);


  const handlePageChange = (page, limit = 20) => {
    navigate(`/hospitals?page=${page}&limit=${limit}`);
  };

  const selectDevice = (name) => {
    const p = new URLSearchParams(location.search);
    p.set('page', '1');
    if (!name || name === 'ALL') {
      p.delete('device_id');
    } else {
      p.set('device_id', name);
    }
    navigate({ pathname: '/hospitals', search: p.toString()});
  };

  const selectRegion = (value) => {
    const p = new URLSearchParams(location.search);
    p.set('page', '1');
    if (!value || value === '전체') {
      p.delete('region');
    } else {
      p.set('region', value);
    }
    navigate({ pathname: '/hospitals', search: p.toString()});
  }

  return (
    <ListStyled className={className}>
      <TitleStyled>Hospitals</TitleStyled>
      <HospitalFilter
        location={location}
        onSelectDevice={selectDevice}
        onSelectRegion={selectRegion}
        hospitals={isHospitals}
        />
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