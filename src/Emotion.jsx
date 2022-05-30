/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #50a3a2;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: 0,
    fontSize: "25px",
    color: "#50a3a2"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <SButton>FIGHT!</SButton>
    </div>
  );
};

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
