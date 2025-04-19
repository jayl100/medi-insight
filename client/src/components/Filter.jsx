import React, { useState } from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  margin-bottom: 60px;
`;

const FilterTitle = styled.span`
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
`;

const FilterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
`;

const FilterItem = styled.li`
  font-size: 18px;
  background-color: ${({ selected }) => (selected ? '#F5FFFF' : '#F9F9F9')};
  color: ${({ selected }) => (selected ? '#00CDCD' : '#000')};
  padding: 10px 24px;
  cursor: pointer;
  border: 1px solid ${({ selected }) => (selected ? '#00CDCD' : '#D9D9D9')};
  transition: all 0.2s ease;
`;

const Filter = ({ title, items }) => {
  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleClick = (index) => {
    if (selectedIndices.includes(index)) {
      // 이미 선택되어 있다면 제거
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      // 새로 선택
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  return (
    <FilterWrapper>
      <FilterTitle>{title}</FilterTitle>
      <FilterList>
        {items.map((item, index) => (
          <FilterItem
            key={index}
            selected={selectedIndices.includes(index)}
            onClick={() => handleClick(index)}
          >
            {item}
          </FilterItem>
        ))}
      </FilterList>
    </FilterWrapper>
  );
};

export default Filter;
