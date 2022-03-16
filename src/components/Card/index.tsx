import React from "react";
import { Container, TitleContainer, UserScroll, UsersContent } from "./styles";
import { TailSpin } from "react-loader-spinner";

export default function Card({ profiles, handleIdUser, loading }: any) {
  console.log(loading);

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

      <UserScroll>
        {UsersSort.map((profile: any, index: number) => {
          return (
            <UsersContent
              key={profile.id}
              onClick={() => handleIdUser(profile.id)}
            >
              <p>{index}</p>
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
      </UserScroll>
    </Container>
  );
}
