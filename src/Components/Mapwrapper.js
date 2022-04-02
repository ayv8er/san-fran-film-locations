import Wrapper, { Status } from "@googlemaps/react-wrapper";

import Mapcomponent from "./Mapcomponent";

const render = (status) => {
  if (status === Status.FAILURE) return <p>Error...</p>;
  if (status === Status.LOADING) return <p>Loading...</p>;
  return null;
};

const Mapwrapper = () => {
  <Wrapper apiKey="AIzaSyC9nAwqbEodEzP-hFR60t2aB7I86D0uYEI" render={render}>
    <Mapcomponent />
  </Wrapper>;
};

export default Mapwrapper;
