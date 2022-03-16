import { useState } from "react";

import dynamic from "next/dynamic";
import { Logo, Wrappper } from "./styles";
import { RiLeafLine } from "react-icons/ri";

import Card from "../../components/Card";
import CardInfoUser from "../../components/CardInfoUser";
import CardActivityUser from "../../components/CardActivityUser";
import axios from "axios";

const BgImage = dynamic(() => import("../../components/BackgroundImage"), {
  ssr: false,
});

export default function Home({ token, users }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visibility, setVisibility] = useState<string>("");

  function handleIdUser(id: string) {
    getUserProfile(id);
  }

  async function getUserProfile(id: string) {
    setLoading(true);
    try {
      const dataUser = await axios.get(
        `https://challenge-fielo.herokuapp.com/users/${id}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      const dataActivities = await axios.get(
        `https://challenge-fielo.herokuapp.com/users/${dataUser.data.programId}/activities`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      const dataProgram = await axios.get(
        `https://challenge-fielo.herokuapp.com/programs/${dataUser.data.programId}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      const dataProgramLevels = await axios.get(
        `https://challenge-fielo.herokuapp.com/programs/${dataUser.data.programId}/levels`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      const dataLevel = await axios.get(
        `https://challenge-fielo.herokuapp.com/levels/${dataUser.data.levelId}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      setUser({
        dataActivities: dataActivities.data,
        dataProgramLevels: dataProgramLevels.data,
        dataProgramaFormated: dataProgram.data,
        dataLevelFormated: dataLevel.data,
        ...dataUser.data,
      });
      setVisibility("show");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Wrappper>
        <Logo>
          <div className="logo">
            <RiLeafLine color="white" size={35} />
          </div>
          <h2>New Roots</h2>
        </Logo>
        <Card loading={loading} profiles={users} handleIdUser={handleIdUser} />
        {visibility === "show" ? (
          <CardInfoUser profile={user} visibility={visibility} />
        ) : (
          <></>
        )}

        <CardActivityUser dataUser={user} visibility={visibility} />
      </Wrappper>
      <BgImage />
    </>
  );
}
