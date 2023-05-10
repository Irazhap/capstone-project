import styled from "styled-components";

const BurgerItem = styled.div`
  background-color: #202020;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  top: 15px;
  left: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10000;

  &:focus {
    outline: none;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: #f2f2f2;
  }
`;

export default function Burger({ isOpen, onClick }) {
  return (
    <BurgerItem isOpen={isOpen} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerItem>
  );
}
