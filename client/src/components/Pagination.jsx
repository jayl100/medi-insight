import React from 'react';
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import styled from 'styled-components';

function Pagination() {
  return (
    <PaginationStyled>
      <button>
        <RiArrowLeftDoubleFill />
      </button>

      <button>
        <FaArrowLeft />
      </button>

      <button>
        <FaArrowRight />
      </button>

      <button>
        <RiArrowRightDoubleFill />
      </button>
    </PaginationStyled>
  );
}

const PaginationStyled = styled.div`
  width: 100%;
`

const SvgStyled = styled.svg`
  font-weight: 500;
`

export default Pagination;