import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  max-height: 386px;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  z-index: 1;
  display: ${(props) => (props.visible === "show" ? "hidden" : "initial")};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  .title-content {
    width: 276px;
    height: 113px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;

    padding-bottom: 20px;

    border-bottom: 1px solid #d7dbe7;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    .name-groud {
      margin-left: 5%;
    }

    .user-name {
      font-size: 16px;
      font-weight: bold;
      width: 179px;
    }

    .program {
      font-size: 12px;
      color: #8a94a6;
      width: 179px;
    }
  }

  .dropdown {
    margin-bottom: 12px;

    cursor: pointer;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  img {
    margin-top: -6px;
  }
`;

export const ScoreContainer = styled.div`
  width: 276px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 24px auto;

  align-items: end;
  justify-items: center;

  border-bottom: 1px solid #d7dbe7;

  padding-bottom: 24px;

  .user-score {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
  }

  .title {
    font-size: 12px;
    color: #8a94a6;
  }

  .points {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .currency {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;
