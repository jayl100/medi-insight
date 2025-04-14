import styled from 'styled-components';

// 스타일 정의
const ClusterWrapper = styled.div `  
    margin-bottom: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;

const ClusterTitle = styled.span `
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-color:#00CDCD;
    padding:10px 24px;
`;

const ClusterList = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    margin-left: 20px;
`;

const ClusterItem = styled.li `
    min-width: 156px;
    font-size: 22px;
    color: #000;
`;

// 컴포넌트
const Cluster = ({title, items}) => (
    <ClusterWrapper>
        <ClusterTitle>{title}</ClusterTitle>
        <ClusterList>
            {items.map((item, index) => (<ClusterItem key={index}>{item}</ClusterItem>))}
        </ClusterList>
    </ClusterWrapper>
);

export default Cluster;
