import styled from "styled-components";

interface MainContentProps {
    userId: string;
}

export const Logo = styled.div`
  width: 100%;
  height: 84px;
  z-index: 1;
  background: #fff;
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: center;

  z-index: 19;

  .logo {
    width: 36px;
    height: 36px;
    background-color: #4ad976;
    border-radius: 50%;
    margin-left: 10%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin-left: 8px;
  }
`;

export const Wrappper = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const MainContent = styled.div<MainContentProps>`
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  gap: 22px;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    ${({ userId }: any) => userId === "" ? `` : `margin-top: 100px;`}
  }

`;
