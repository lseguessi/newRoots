import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { Logo, Wrappper, MainContent } from "./styles";

import Card from "../../components/Card";
import CardInfoUser from "../../components/CardInfoUser";
import CardActivityUser from "../../components/CardActivityUser";

import { getData } from "../../services/api";

import { RiLeafLine } from "react-icons/ri";

const BgImage = dynamic(() => import("../../components/BackgroundImage"), {
  ssr: false,
});

export default function Home({ token, users }) {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [visibility, setVisibility] = useState<string>("");

  async function handleIdUser(id: string) {

    if (visibility === "show" && id === user.id) {
      setVisibility("")
      setUserId("");
      return;
    }

    setUserId(id);
    setLoading(true);
    setUser(await getData(id, token));
    setVisibility("show");
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>NewRoots</title>
      </Head>
      <Wrappper>
        <Logo>
          <div className="logo">
            <RiLeafLine color="white" size={35} />
          </div>
          <h2>New Roots</h2>
        </Logo>
        <MainContent userId={userId}>
          <Card loading={loading} userId={userId} profiles={users} handleIdUser={handleIdUser} />
          {visibility === "show" ? (
            <>
              <CardInfoUser profile={user} visibility={visibility} />
              <CardActivityUser userActivities={user} visibility={visibility} />
            </>
          ) : (
            <></>
          )}
        </MainContent>
      </Wrappper>
      <BgImage />
    </>
  );
}
