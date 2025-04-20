import styled from 'styled-components';

// Main 제목 스타일 (큰 제목)
export const MainTitleWrapper = styled.div`
  margin-top: 104px;
  margin-bottom: 52px;
`;

export const MainSubTitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 8px;
`;

export const MainTitle = styled.h2`
  font-size: 36px;
  color: #000;
  font-weight: bold;
`;

// 본문 텍스트 스타일 (중간 크기)
export const Text = styled.p`
  font-size: 22px;
  margin: 104px 0 52px;
  color: #333;
  font-weight: normal;
`;

export const Btn = styled.a`
    display: inline-flex;
    width: 178px;
    height: 57px;
    color: #fff;
    background-color: #00CDCD;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 22px;
    transition: all 0.2s ease;
    border: 1px solid #00CDCD;
     &:hover {
        background-color: #F5FFFF;
        color: #00CDCD;
        
  }
`;

// Table
export const Table = styled.div`
    div.total-wrapper {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;
    }

      p {
        font-weight: 700;
        font-size: 22px;
        &.total {
          font-weight: 400;
          font-size: 14px;
        }
      }
`
