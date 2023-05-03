import Image from "next/image";
import styled from "styled-components";

const CardImage = styled(Image)`
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  min-width: 180px;
  max-width: 180px;
`;

const StyledParagraph = styled.p`
  margin: 0 10px;
`;

const StyledTitle = styled.h3`
  margin: 0 10px;
`;

export default function Card({ image, title, year }) {
  return (
    <>
      <CardImage src={image} alt={title} width={180} height={250} />
      <StyledParagraph>{year}</StyledParagraph>
      <StyledTitle>{title}</StyledTitle>
    </>
  );
}
