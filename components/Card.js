import Image from "next/image";
import styled from "styled-components";

const CardImage = styled(Image)`
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  width: 180px;
  max-width: 250px;
`;

const StyledParagraph = styled.p`
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledTitle = styled.h3`
  margin-left: 10px;
  margin-right: 10px;
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
