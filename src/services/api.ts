import axios from "axios";

export async function getData(id: string, token: string) {
  const url = axios.create({
    baseURL: "https://challenge-fielo.herokuapp.com",
    headers: {
      "x-access-token": token,
    },
  });

  try {
    const dataUser = await url.get(`/users/${id}`);
    const dataActivities = await url.get(
      `/users/${dataUser.data.programId}/activities`
    );
    const dataProgram = await url.get(`/programs/${dataUser.data.programId}`);
    const dataProgramLevels = await url.get(
      `/programs/${dataUser.data.programId}/levels`
    );
    const dataLevel = await url.get(`/levels/${dataUser.data.levelId}`);
    return {
      dataActivities: dataActivities.data,
      dataProgramLevels: dataProgramLevels.data,
      dataProgramFormated: dataProgram.data,
      dataLevelFormated: dataLevel.data,
      ...dataUser.data,
    };
  } catch (error) {
    console.log(error);
  }
}
