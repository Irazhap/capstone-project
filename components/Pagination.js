import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 2.5px;
  padding: 8px 15px;
  margin: 5px;
  background-color: #222222;
  color: #f2f2f2;
  text-align: center;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.active ? "#0070f3" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  cursor: pointer;
`;

export default function Pagination({ pageNumber, handlePrev, handleNext }) {
  return (
    <PaginationContainer>
      <StyledButton onClick={handlePrev}>Prev</StyledButton>
      <StyledButton onClick={handleNext}>Next</StyledButton>
    </PaginationContainer>
  );
}
