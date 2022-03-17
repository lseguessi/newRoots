import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  max-height: 386px;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1;
  display: ${(props) => (props.visible === "show" ? "hidden" : "initial")};

  .scroll-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 85%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 4px;
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
  width: 100%;
  height: 42px;
  margin-top: 12px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  margin-left: 12px;

  p {
    margin-block-start: 0;
    margin-block-end: 0;

    font-size: 16px;
    color: #16325c;
    font-weight: 600;

    :last-child {
      font-size: 13px;
      color: #8a94a6;

      margin-top: 4px;
    }
  }
`;

export const ActivityContainer = styled.div`
  max-width: 282px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #d7dbe7;

  margin: 0 auto;
  padding-top: 12px;

  :first-child {
    margin-top: 12px;
  }
`;

export const Activity = styled.div`
  max-width: 282px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 12px;

  .icons {
    width: 16px;
    height: 16px;
    margin-right: 12px;
    margin-left: 10px;
  }

  .activities {
    width: 272px;
    height: auto;

    p {
      margin-block-start: 0;
      margin-block-end: 0;
    }

    .time {
      font-size: 12px;
      color: #8a94a6;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .content {
      font-size: 13px;
      color: #16325c;
      line-height: 17px;
    }
  }
`;
