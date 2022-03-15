import axios from "axios";
import { useEffect } from "react";
import { Wrappper } from "./styles";
import dynamic from "next/dynamic";

const BgImage = dynamic(() => import("../../components/BackgroundImage"), {
  ssr: false,
});

export default function Home() {
  async function requestToken() {
    const respToken = await axios.post(
      "https://challenge-fielo.herokuapp.com/auth",
      {
        headers: {
          "x-api-id":
            "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb",
        },
      }
    );
    // console.log(respToken);
  }

  useEffect(() => {
    requestToken();
  }, []);

  return (
    <>
      <Wrappper>
        <div>
          <h1>PROBLEMA DE CORS EU NÃO RESOLVO</h1>
        </div>
      </Wrappper>
      <BgImage />
    </>
  );
}
