import Image from "next/image";
import styled from "styled-components";

export const CardImage = styled(Image)`
  border-radius: 10px;

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  transition: filter 0.2s ease-in-out; // Füge eine Übergangseigenschaft hinzu
  &:hover {
    filter: brightness(0.6); // Abdunkelungseffekt bei Hover
  }
`;
