import axios from "axios";

export const fetchFilms = () => {
  axios
    .get("https://data.sfgov.org/resource/yitu-d5am.json")
    .then((res) => {
      res.data.map((object, index) => {
        object.which_list = "locations";
        object.original_index = index;
        return object;
      });
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
