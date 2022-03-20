import React, { useState } from "react";
import { UsersContent } from "./styles";
import { BallTriangle } from "react-loader-spinner";

interface ProfileProps {
  id: string;
  name: string;
  image: string;
  balance: {
    points: number;
  };
}

interface UsersProps {
  profile: ProfileProps;
  handleIdUser: Function;
  loading: boolean;
  userId: string;
  index: number;
}

export default function User({
  profile,
  handleIdUser,
  index,
  loading,
  userId
}: UsersProps) {

  function handleClick(id: string) {
    handleIdUser(id);
  }

  return (
    <UsersContent isSelected={userId === profile.id ? "true" : "false"} key={profile.id} onClick={() => handleClick(profile.id)}>
      <p>{index + 1}</p>
      <div>
        <img
          src={
            profile.image === null
              ? "../../../images/user_null.png"
              : profile.image
          }
          alt={profile.name}
        />
        <p>{profile.name} </p>
        {loading && (
          <span style={{ width: 10, marginLeft: 10 }}>
            <BallTriangle color="#00BFFF" height={12} width={12} />
          </span>
        )}
      </div>
      <p className="userPoints">{profile.balance.points}</p>
    </UsersContent>
  );
}
