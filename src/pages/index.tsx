import axios from "axios";
import Home from "./home";

export default function Index({ token, users }) {
  return (
    <>
      <Home token={token} users={users} />
    </>
  );
}

export async function getStaticProps() {
  const respToken = await axios.post(
    "https://challenge-fielo.herokuapp.com/auth",
    {
      headers: {
        "x-api-id": process.env.API_ID,
      },
    }
  );

  const responseUsers = await axios.get(
    "https://challenge-fielo.herokuapp.com/users",
    {
      headers: {
        "x-access-token": respToken.data.token,
      },
    }
  );

  return {
    props: {
      token: respToken.data.token,
      users: responseUsers.data,
    },
  };
}
