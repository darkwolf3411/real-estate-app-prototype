import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const StyeledPagination = styled.div`
  .pagination {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10px, min-content));
    justify-content: center;
    grid-column-gap: 5px;
    padding: 20px;
    margin: 0 auto;
    & li {
      padding: 8px 15px;
      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.text_color};
      list-style-type: none;
      &:hover,
      &:focus {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.accent};
        border-color: ${({ theme }) => theme.colors.accent};
        color: #fff;
      }
      &.disabled{
        cursor: default;
        color: #3B71A6;
        background-color: #dbdbdb;
      }
    }
    & .active {
      background-color: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
      color: #fff;
    }
  }
`;

const Pagination = ({callback,totalPages,limit}) => {
  return (
    <StyeledPagination>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(totalPages / limit)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={callback}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </StyeledPagination>
  );
};

export default Pagination;
