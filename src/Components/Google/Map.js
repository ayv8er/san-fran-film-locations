import { useEffect, useState, useRef } from "react";

const Map = (props) => {
  const { children, center, zoom } = props;
  const geocoder = new window.google.maps.Geocoder();

  const ref = useRef(null);

  const [map, setMap] = useState();

  const style = { height: "50vh" };

  useEffect(() => {
    geocoder
      .geocode({ address: "1401 NE John Deshields Blvd" }) // insert array of addresses from fetched dataset
      .then((result) => {
        console.log(result);
        // const { results } = result.results;
        // const firstResult = results[0];
        // const location = firstResult.geometry.location;
        // const lat = location.lat();
        // const lng = location.lng();
        // setCenter({ lat, lng });
      })
      .catch((error) => {
        console.log(error);
      });
  });

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
