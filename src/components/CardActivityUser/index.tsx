import React from "react";
import {
  Container,
  TitleContainer,
  ActivityContainer,
  Activity,
  ActivityScroll,
} from "./styles";

import { BiRadioCircleMarked } from "react-icons/bi"; // Radio Azul
import {ImFlag} from "react-icons/im"; // Flag Verde
import {AiFillLock} from "react-icons/ai"; // Lock Bege

export default function CardActivityUser({ dataUser, visibility }: any) {
  return (
    <Container visible={visibility}>
      <TitleContainer>
        <p>Activity Feed</p>
        <p>Show Filters</p>
      </TitleContainer>

      <ActivityScroll>
      <ActivityContainer>
          <Activity>
            <div className="icons">
              <BiRadioCircleMarked color={"#1C8EFF"} size={25} />
            </div>
            <div className="activities">
              <p className="time">Yesterday</p>
              <p className="content">
                Received 100 points for completing the Incentive IMperdiet
                senectus sit.
              </p>
            </div>
          </Activity>
        </ActivityContainer>
        <ActivityContainer>
          <Activity>
            <div className="icons">
              <BiRadioCircleMarked color={"#1C8EFF"} size={25} />
            </div>
            <div className="activities">
              <p className="time">Yesterday</p>
              <p className="content">
                Received 100 points for completing the Incentive IMperdiet
                senectus sit.
              </p>
            </div>
          </Activity>
        </ActivityContainer>
        <ActivityContainer>
          <Activity>
            <div className="icons">
              <BiRadioCircleMarked color={"#1C8EFF"} size={25} />
            </div>
            <div className="activities">
              <p className="time">Yesterday</p>
              <p className="content">
                Received 100 points for completing the Incentive IMperdiet
                senectus sit.
              </p>
            </div>
          </Activity>
        </ActivityContainer>
        <ActivityContainer>
          <Activity>
            <div className="icons">
              <BiRadioCircleMarked color={"#1C8EFF"} size={25} />
            </div>
            <div className="activities">
              <p className="time">Yesterday</p>
              <p className="content">
                Received 100 points for completing the Incentive IMperdiet
                senectus sit.
              </p>
            </div>
          </Activity>
        </ActivityContainer>
        <ActivityContainer>
          <Activity>
            <div className="icons">
              <BiRadioCircleMarked color={"#1C8EFF"} size={25} />
            </div>
            <div className="activities">
              <p className="time">Yesterday</p>
              <p className="content">
                Received 100 points for completing the Incentive IMperdiet
                senectus sit.
              </p>
            </div>
          </Activity>
        </ActivityContainer>
        <ActivityContainer>
          <Activity>
            <div className="icons">
              <BiRadioCircleMarked color={"#1C8EFF"} size={25} />
            </div>
            <div className="activities">
              <p className="time">Yesterday</p>
              <p className="content">
                Received 100 points for completing the Incentive IMperdiet
                senectus sit.
              </p>
            </div>
          </Activity>
        </ActivityContainer>
        <ActivityContainer>
          <Activity>
            <div className="icons">
              <BiRadioCircleMarked color={"#1C8EFF"} size={25} />
            </div>
            <div className="activities">
              <p className="time">Yesterday</p>
              <p className="content">
                Received 100 points for completing the Incentive IMperdiet
                senectus sit.
              </p>
            </div>
          </Activity>
        </ActivityContainer>
      </ActivityScroll>
    </Container>
  );
}

// BiRadioCircleMarked
