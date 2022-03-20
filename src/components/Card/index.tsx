import React from "react";
import { Container, TitleContainer } from "./styles";
import ScrollContainer from 'react-indiana-drag-scroll'
import User from "../User";
interface ProfileProps {
  id: string;
  name: string;
  image: string;
  points: number;
}
interface CardProps {
  profiles: Array<ProfileProps>
  handleIdUser: Function;
  userId: string;
  loading: boolean;
}

export default function Card({ profiles, handleIdUser, loading, userId}: CardProps) {
  
  const UsersSort = profiles.sort((a: any, b: any) => {
    return b.balance.points - a.balance.points;
  });

  return (
    <Container>
      <TitleContainer>
        <p>Pos.</p>
        <p>Member</p>
        <p>Points</p>
      </TitleContainer>

      <ScrollContainer className="scroll-container" vertical hideScrollbars={false} horizontal={false}>
        {UsersSort.map((profile: any, index: number) => {
          return (
            <User key={profile.id} userId={userId} profile={profile} index={index} handleIdUser={handleIdUser} loading={loading}/>
          );
        })}
      </ScrollContainer>
    </Container>
  );
}
