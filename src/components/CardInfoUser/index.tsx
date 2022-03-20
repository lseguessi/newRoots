import React from "react";
import {
  Container,
  TitleContainer,
  ScoreContainer,
  LevelContainer,
} from "./styles";

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

      <LevelContainer>
        <div className="levels">
          <div className="first">
            <p
              className={
                profile.dataLevelFormated.name !== "Bronze"
                  ? "first-title disabled"
                  : "first-title"
              }
            >
              Bronze
            </p>
            <input
              readOnly
              checked={
                profile.dataLevelFormated.name === "Bronze" ? true : false
              }
              type="radio"
              name="Bronze"
              id="1"
            />
          </div>
          <span className="row"></span>
          <div>
            <p
              className={
                profile.dataLevelFormated.name !== "Silver" ? "disabled" : ""
              }
            >
              Silver
            </p>
            <input
              readOnly
              checked={
                profile.dataLevelFormated.name === "Silver" ? true : false
              }
              type="radio"
              name="Silver"
              id="2"
            />
          </div>
          <span className="row"></span>
          <div className="last">
            <p
              className={
                profile.dataLevelFormated.name !== "Gold" ? "disabled" : ""
              }
            >
              Gold
            </p>
            <input
              readOnly
              checked={profile.dataLevelFormated.name === "Gold" ? true : false}
              type="radio"
              name="Gold"
              id="3"
            />
          </div>
        </div>
      </LevelContainer>
    </Container>
  );
}
