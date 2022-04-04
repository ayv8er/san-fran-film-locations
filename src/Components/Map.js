import { useEffect, useState, useRef } from "react";

const Map = () => {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [center, setCenter] = useState({
    center: { lat: 0, lng: 0 },
    zoom: 3,
  });

  const style = { height: "50vh" };

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.setOptions({ center, zoom: 3 });
    }
    new window.google.maps.Marker({
      position: center,
      map,
    });
  }, [map, center]);

  return <div ref={ref} id="map" style={style} />;
};

export default Map;
