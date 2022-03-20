import React from "react";
import {
  Container,
  TitleContainer,
  ActivityContainer,
  Activity,
} from "./styles";

import ScrollContainer from 'react-indiana-drag-scroll'
import { BiRadioCircleMarked } from "react-icons/bi"; // Radio Azul
import { ImFlag } from "react-icons/im"; // Flag Verde
import { AiFillLock } from "react-icons/ai"; // Lock Bege
import { BsBookmarkFill } from "react-icons/bs"; // Bookmark Verde

interface CardActivityUserProps {
  userActivities: any;
  visibility: string;
}

export default function CardActivityUser({ userActivities, visibility }: CardActivityUserProps) {

  const RenderIcon = (activities: string) => {
    if (activities.indexOf("Received") !== -1) {
      return <BiRadioCircleMarked color={"#1C8EFF"} size={25} />;
    } else if (activities.indexOf("Completed") !== -1) {
      return <ImFlag color={"#4BCA8D"} size={18} />;
    } else if (activities.indexOf("Redeemed") !== -1) {
      return <AiFillLock color={"#F7A452"} size={18} />;
    } else if (activities.indexOf("module") !== -1) {
      return <BsBookmarkFill color={"#4BCA8D"} size={18} />;
    }
  };

  return (
    <Container visible={visibility}>
      <TitleContainer>
        <p>Activity Feed</p>
        <p>Show Filters</p>
      </TitleContainer>

      <ScrollContainer className="scroll-container" vertical hideScrollbars={false}>
        {userActivities.dataActivities.map((activity: any, index: number) => (
          <ActivityContainer key={index}>
            <Activity>
              <div className="icons">{RenderIcon(activity.description)}</div>
              <div className="activities">
                {/* <p className="time">{activity.date}</p> */}
                <p className="time">{new Date(activity.date.substr(-2)).toLocaleString('en-us', {  weekday: 'long' })}</p>
                <p className="content">{activity.description}</p>
              </div>
            </Activity>
          </ActivityContainer>
        ))}
      </ScrollContainer>
    </Container>
  );
}
