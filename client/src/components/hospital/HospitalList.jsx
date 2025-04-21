import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function HospitalList({ hospitals, total }) {
  const navigate = useNavigate();

  const handleHospitalDetail = (id) => {
    navigate(`/hospitals/${id}`);
  };

  return (
    <TableStyled>
      <TheadStyled>
        <tr>
          <ThIdStyled>Id</ThIdStyled>
          <ThNameStyled>병원명</ThNameStyled>
          <ThTypeStyled>병원종류</ThTypeStyled>
          <ThRegionStyled>지역</ThRegionStyled>
          <ThDevicesStyled>보유 기기</ThDevicesStyled>
        </tr>
      </TheadStyled>
      <tbody>
      {hospitals.map((hospital) => (
        <TrStyled key={hospital.id} onClick={() => handleHospitalDetail(hospital.id)}>
          <TdStyled>{hospital.id}</TdStyled>
          <TdStyled>{hospital.name}</TdStyled>
          <TdStyled>{hospital.type_name}</TdStyled>
          <TdStyled>{hospital.region_name}</TdStyled>
          <TdDevicesStyled>
            {hospital.devices.map((d, i) => (
              <DevicesChipStyled key={i}>
                {d}
              </DevicesChipStyled>
            ))}
          </TdDevicesStyled>
        </TrStyled>
      ))}
      </tbody>
    </TableStyled>
  );
}

export const TableStyled = styled.table`
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
`;

export const TheadStyled = styled.thead`
    width: 100%;
    border-top: 1px solid #222222;
    border-bottom: 1px solid #222222;
`;

const ThStyled = styled.th`
    padding: 1rem;
    text-align: left;
    line-height: 1.6;
`;

const ThIdStyled = styled(ThStyled)`
    width: 5%;
`;

const ThNameStyled = styled(ThStyled)`
    width: 25%;
`;

const ThTypeStyled = styled(ThStyled)`
    width: 8%;
`;

const ThRegionStyled = styled(ThStyled)`
    width: 7%;
`;

const ThDevicesStyled = styled(ThStyled)`
    width: 55%;
`;

const TrStyled = styled.tr`
    border-bottom: 1px solid #d9d9d9;

    &:hover {
        background-color: #f9f9f9;
    }
`

export const TdStyled = styled.td`
    padding: 1rem;
    text-align: left;
    line-height: 1.6;
    cursor: pointer;
`;

const TdDevicesStyled = styled(TdStyled)`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: flex-start;
`;

export const DevicesChipStyled = styled.div`
    width: fit-content;
    border-radius: 20px;
    background-color: #F5FFFF;
    color: #00CDCD;
    padding: 0.375rem 1rem;
    font-size: 14px;
`;


export default HospitalList;