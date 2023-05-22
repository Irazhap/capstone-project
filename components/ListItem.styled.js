import Link from "next/link";
import styled from "styled-components";

export const StyledListItem = styled(Link)`
  color: #262626;
  text-decoration: none;
  font-size: 18px;
  margin: 5px;

  &:hover {
    text-decoration: underline;
  }
  z-index: 11111;
`;
