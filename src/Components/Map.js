import { useEffect, useRef } from "react";

const Map = ({ center, zoom }) => {
  const ref = useRef();
  const style = { height: "50vh" };

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center: { lat: 0, lng: 0 },
      zoom: 3,
    });
  });

  return <div ref={ref} id="map" style={style} />;
};

export default Map;
