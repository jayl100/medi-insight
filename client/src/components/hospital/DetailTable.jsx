import React from 'react';
import { formatFloat } from '../../utils/formatter.js';
import { TableStyled, TdStyled, TheadStyled } from './HospitalList.jsx';
import styled from 'styled-components';

function DetailTable({ info }) {
  return (
    <>
      <TableStyled>
        <TheadStyled>
          <tr>
            <ThNameStyled>보유 기기명</ThNameStyled>
            <ThQuantityStyled>보유 대수</ThQuantityStyled>
            <ThDiffStyled>추가 필요 대수</ThDiffStyled>
          </tr>
        </TheadStyled>
        <tbody>
        {info.device_list.map((d) => (
          <TrStyled key={d.device_id}>
            <TdStyled>{d.name}</TdStyled>
            <TdStyled>{d.quantity}</TdStyled>
            <TdStyled>{
              d.quantity_diff > 0 ?
              <BoldSpanStyled>{`${formatFloat(d.quantity_diff)}`}</BoldSpanStyled>
                :
                <FadedSpanStyled>추가 기기가 필요하지 않습니다.</FadedSpanStyled>
            }</TdStyled>
          </TrStyled>
        ))}
        </tbody>
      </TableStyled>
    </>
  );
}

const ThStyled = styled.th`
    padding: 1rem;
    text-align: left;
    line-height: 1.6;
`;


const ThNameStyled = styled(ThStyled)`
    width: 50%;
`;

const ThQuantityStyled = styled(ThStyled)`
    width: 25%;
`;
const ThDiffStyled = styled(ThStyled)`
    width: 25%;
`;

const TrStyled = styled.tr`
    border-bottom: 1px solid #d9d9d9;
`;

const BoldSpanStyled = styled.span`
  font-weight: bold;
`

const FadedSpanStyled = styled.span`
    color: #c9c9c9;
`

export default DetailTable;