import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  max-height: 386px;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  z-index: 1;

  .scroll-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 88%;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-button {
      height: 0;
    }
    ::-webkit-scrollbar-track-piece {
      background: #fafbfd;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #d7dbe7;
      border-radius: 10px;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 17px;
  margin-top: 12px;
  margin-bottom: 8px;

  p {
    font-size: 13px;
    color: #8a94a6;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    line-height: 17px;
  }

  p:nth-child(1) {
    margin-left: 10px;
  }

  p:nth-child(2) {
    width: 180px;
  }

  p:nth-child(3) {
    margin-right: 10px;
  }
`;