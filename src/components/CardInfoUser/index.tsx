import React from "react";
import { Container, TitleContainer, ScoreContainer } from "./styles";

import { GiLinkedRings } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";

export default function CardInfoUser({ profile, visibility }: any) {

  return (
    <Container visible={visibility}>
      <TitleContainer>
        <div className="title-content">
          <img
            className="avatar"
            src={
              profile.image === null
                ? "../../../images/user_null.png"
                : profile.image
            }
            alt={profile.name}
          />
          <div className="name-groud">
            <p className="user-name">{profile.name}</p>
            <p className="program">{profile.dataProgramFormated.name}</p>
          </div>
        </div>
      </TitleContainer>
      <ScoreContainer>
        <div>
          <div className="user-score">
            <span>
              <GiLinkedRings size={16} color={"#1C8EFF"} />
            </span>
            <p>{profile.balance.points}</p>
          </div>
          <p className="title">Points</p>
        </div>
        <div>
          <p>{profile.balance.miles}</p>
          <p className="title">Miles</p>
        </div>
        <div>
        <div className="currency">
          <FaDollarSign size={16} color={"#8A94A6"} />
            <p>{profile.balance.currency.toFixed(0)}</p>
          </div>
          <p className="title">Currency</p>
        </div>
      </ScoreContainer>
    </Container>
  );
}
