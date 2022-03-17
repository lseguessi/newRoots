import React from "react";
import { Container, TitleContainer, UsersContent } from "./styles";
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Card({ profiles, handleIdUser, loading }: any) {

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

      <ScrollContainer className="scroll-container" vertical hideScrollbars={false}>
        {UsersSort.map((profile: any, index: number) => {
          return (
            <UsersContent
              key={profile.id}
              onClick={() => handleIdUser(profile.id)}
            >
              <p>{index + 1}</p>
              <div>
                <img
                  src={
                    profile.image === null
                      ? "../../../images/user_null.png"
                      : profile.image
                  }
                  alt="profile"
                />
                <p>
                  {profile.name}{" "}
                </p>
              </div>
              <p className="userPoints">{profile.balance.points}</p>
            </UsersContent>
          );
        })}
      </ScrollContainer>
    </Container>
  );
}
