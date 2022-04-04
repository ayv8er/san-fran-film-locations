import { useEffect, useState, useRef } from "react";

const Map = (props) => {
  const { destinations } = props;
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  const ref = useRef(null);
  const style = { height: "50vh" };
  const geocoder = new window.google.maps.Geocoder();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: 37.7749, lng: -122.4194 },
          zoom: 9,
        })
      );
    }
  }, [ref, map]);

  useEffect(() => {
    destinations.map((loc) => {
      geocoder
        .geocode({ address: loc.locations })
        .then((res) => {
          console.log(res);
          const lat = res.results[0].geometry.location.lat();
          const lng = res.results[0].geometry.location.lng();
          setMarkers(...markers, { lat, lng });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });

  useEffect(() => {
    if (map) {
      new window.google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map,
      });
    }
  }, [map, markers]);

  return <div ref={ref} id="map" style={style} />;
};

export default Map;
