import React from 'react';
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import styled from 'styled-components';
import usePagination from '../hooks/usePagination.js';

function Pagination({ current, total, onChange }) {
  const items = usePagination(current, total, 5);

  return (
    <PaginationStyled>
      <ButtonStyled
        onClick={() => onChange(1)}
        disabled={current === 1}
      >
        <RiArrowLeftDoubleFill />
      </ButtonStyled>

      <ButtonStyled
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
      >
        <FaArrowLeft />
      </ButtonStyled>

      {items.map((p, i) =>
        p === '…' ? (
          <Ellip key={`ellipsis-${i}`}>…</Ellip>
        ) : (
          <ButtonStyled
            key={`page-${p}`}
            $active={p === current}
            aria-current={p === current ? 'page' : undefined}
            onClick={() => onChange(p)}
          >
            {p}
          </ButtonStyled>
        )
      )}
      <ButtonStyled
        onClick={() => onChange(current + 1)}
        disabled={current === total}
      >
        <FaArrowRight />
      </ButtonStyled>

      <ButtonStyled
        onClick={() => onChange(total)}
        disabled={current === total}
      >
        <RiArrowRightDoubleFill />
      </ButtonStyled>
    </PaginationStyled>
  );
}

const PaginationStyled = styled.div`
    width: 100%;
    display: flex;
    gap: 0.5rem;    
    justify-content: center;
`;

const ButtonStyled = styled.button`
    border-radius: 8px;
    border: ${({ $active }) => ($active ? '1px solid #00CDCD' : '1px solid transparent')};;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: ${({ $active }) => ($active ? 700 : 500)};
    background-color: ${({ $active }) =>
            $active ? '#F5FFFF' : '#f9f9f9'};
    color: ${({ $active }) =>
            $active ? '#00CDCD' : '#666666'};
    cursor: pointer;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

    &:hover {
        border-color: #00CDCD;
        background-color: #f5ffff;
    }

    &:focus, &:focus-visible {
        outline: none;
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }

`;

const Ellip = styled.span`
  display: flex;
  align-items: center;
  padding: 0 0.3rem;
  color: #d9d9d9;
`;

export default Pagination;