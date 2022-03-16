import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  max-height: 386px;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  z-index: 1;
  opacity: ${(props) => (props.visible === "show" ? 1 : 0)};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  .title-content {
    width: 180px;
    height: 113px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  img {
    margin-top: -6px;
  }
`;
