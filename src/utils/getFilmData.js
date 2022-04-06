import axios from "axios";

export const fetchFilmData = () => {
  return axios
    .get(
      `https://data.sfgov.org/resource/yitu-d5am.json?$$app_token=${process.env.REACT_APP_DATASF_APP_TOKEN}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
