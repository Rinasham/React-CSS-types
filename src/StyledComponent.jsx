import styled from "styled-components";

export const StyledComponent = () => {
  return (
    <SContainer>
      <STitle>Styled Component</STitle>
      <SButton>FIGHT!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #50a3a2;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  font-size: 25px;
  color: #50a3a2;
`;

const SButton = styled.button`
  padding: 15px 30px;
  border: none;
  background-color: #50a3a2;
  color: white;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;
