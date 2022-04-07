import axios from "axios";

export const fetchFilmData = () => {
  return axios
    .get(
      `https://data.sfgov.org/resource/yitu-d5am.json?$$app_token=${process.env.REACT_APP_DATASF_APP_TOKEN}`
    )
    .then((res) => {
      const withLocations = res.data.filter((object) => object.locations);
      return withLocations;
    })
    .catch((error) => {
      return error;
    });
};
