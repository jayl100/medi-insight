import React, { useEffect } from 'react';
import useHospital from '../hooks/useHospital.jsx';
import { useParams } from 'react-router-dom';
import { DevicesChipStyled } from '../components/hospital/HospitalList.jsx';
import styled from 'styled-components';
import DetailTable from '../components/hospital/DetailTable.jsx';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function HospitalDetail() {
  const { id } = useParams();
  const idInt = parseInt(id);
  const { isHospitalDetail, fetchHospitalDetail } = useHospital();

  useEffect(() => {
    fetchHospitalDetail(idInt);
  }, []);

  return (
    <div>
      <PrevButtonStyle onClick={() => history.back()}>
        <IconWrapper><MdOutlineKeyboardArrowLeft /></IconWrapper>
        <TextWrapper>이전으로</TextWrapper>
      </PrevButtonStyle>
      <TitleSectionStyled>
        <p>{isHospitalDetail.type_name}</p>
        <TitleStyled>{isHospitalDetail.name}</TitleStyled>
        <DevicesStyled>
          {isHospitalDetail.device_list.map(d =>
            <li key={d.device_id}>
              <DevicesChipStyled>{d.name}</DevicesChipStyled>
            </li>)
          }
        </DevicesStyled>
      </TitleSectionStyled>
      <InfoSectionStyled>
        <InfoInnerStyled>
          <InfoTitleStyled>주소</InfoTitleStyled>
          <InfoDescriptionStyled>{isHospitalDetail.address}</InfoDescriptionStyled>
        </InfoInnerStyled>
        <InfoInnerStyled>
          <InfoTitleStyled>전화번호</InfoTitleStyled>
          <InfoDescriptionStyled>{isHospitalDetail.phone}</InfoDescriptionStyled>
        </InfoInnerStyled>
        <InfoInnerStyled>
          <InfoTitleStyled>총 의사 수</InfoTitleStyled>
          <InfoDescriptionStyled>{isHospitalDetail.doctor_quantity}명</InfoDescriptionStyled>
        </InfoInnerStyled>
      </InfoSectionStyled>
      <div>
        <DetailTable info={isHospitalDetail}></DetailTable>
      </div>
    </div>
  );
}

const PrevButtonStyle = styled.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 1rem;
    border: none;
    font-size: 1rem;
    background-color: transparent;
    padding: 0;
    cursor: pointer;

    &:hover {
        color: #00CDCD;
    }
`;

const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    margin-bottom: 1px;
`;

const TextWrapper = styled.span`
    display: inline-block;
    line-height: 1.2;
`;


const TitleSectionStyled = styled.div`
    margin-bottom: 2rem;
    background-color: #f9f9f9;
    padding: 2rem;
`;

const TitleStyled = styled.h1`
    margin: 1rem 0;
`;

const InfoSectionStyled = styled.div`
    margin-bottom: 2rem;
`;

const InfoInnerStyled = styled.div`
    display: flex;
    padding: 0.5rem 0;
`;

const InfoTitleStyled = styled.h3`
    width: 10rem;
`;

const InfoDescriptionStyled = styled.p`
    font-size: 1.2rem;
`;


const DevicesStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: flex-start;
`;


export default HospitalDetail;