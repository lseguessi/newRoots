import React from "react";
import { Container, TitleContainer } from "./styles";

export default function CardInfoUser({ profile, visibility }: any) {
  console.log("profile");
  console.log(profile);

  return (
    <Container visible={visibility}>
      <TitleContainer>
        <div className="title-content">
          <img
            src={
              profile.image === null
                ? "../../../images/user_null.png"
                : profile.image
            }
            alt={profile.name}
            style={{ width: 60, height: 60, borderRadius: "50%" }}
          />
          <p style={{ fontSize: 16, fontWeight: "bold" }}>{profile.name}</p>
        </div>
      </TitleContainer>
    </Container>
  );
}
