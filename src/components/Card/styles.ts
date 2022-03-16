import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  max-height: 386px;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  z-index: 1;
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

export const UserScroll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 88%;
  overflow-y: scroll;
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
`;

export const UsersContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 32px;
  margin-left: 8px;
  cursor: pointer;

  :hover {
    background-color: #f0f8fc;
    border-radius: 8px;
  }

  p {
    font-size: 13px;
    color: #16325c;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  p:nth-child(1) {
    margin-left: 6px;
    margin-right: 6px;
    width: 22px;
    text-align: center;
  }

  div {
    width: 185px;
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }

  .userPoints {
    width: 30px;
    text-align: right;
    margin-right: 10px;
  }
`;
