import styled from "styled-components";
import { StyledCardImage } from "./StyledCardImage";

const StyledParagraph = styled.p`
  margin: 0 10px;
`;

const StyledMovieTitle = styled.h3`
  margin: 0 10px;
`;

export default function Card({ image, title, year }) {
  return (
    <>
      <StyledCardImage src={image} alt={title} width={140} height={210} />
      <StyledParagraph>{year}</StyledParagraph>
      <StyledMovieTitle>{title}</StyledMovieTitle>
    </>
  );
}
