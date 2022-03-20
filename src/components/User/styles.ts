import styled from "styled-components";

interface ContainerProps {
  isSelected: string;
}

export const UsersContent = styled.div<ContainerProps>`
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

  span {
    width: 10px;
    margin-left: 10px;
  }

  ${({ isSelected }: any) => isSelected === "true" ?  `background-color: #f0f8fc; border-radius: 8px` : ``}
  
  `;
