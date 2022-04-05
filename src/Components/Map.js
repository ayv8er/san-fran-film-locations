import { useEffect, useState, useRef } from "react";

const Map = (props) => {
  const { dragOver, drop, destinations } = props;
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
          zoom: 11.5,
        })
      );
    }
  }, [ref, map]);

  useEffect(() => {
    // add if guard here

    destinations.map((loc) => {
      return geocoder
        .geocode({ address: loc.locations })
        .then((res) => {
          const lat = res.results[0].geometry.location.lat();
          const lng = res.results[0].geometry.location.lng();
          const position = { lat, lng };
          setMarkers([...markers, position]);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [destinations]);

  useEffect(() => {
    if (map) {
      markers.map((position) => {
        return new window.google.maps.Marker({
          position: position,
          map,
        });
      });
    }
  }, [map, markers]);

  return (
    <div
      style={style}
      className="itinerary"
      onDragOver={(event) => {
        dragOver(event);
      }}
      onDrop={(event) => {
        drop(event);
      }}
    >
      <div className="itinerary" ref={ref} id="map" style={style} />;
    </div>
  );
};

export default Map;
