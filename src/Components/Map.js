import { useEffect, useRef, useState } from "react";

const Map = (props) => {
  const { dragOver, drop, markers } = props;
  const [map, setMap] = useState();
  const ref = useRef(null);

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
    if (map) {
      markers.map((position, index) => {
        return new window.google.maps.Marker({
          position,
          label: `${index + 1}`,
          map,
        });
      });
    }
  }, [map, markers]);

  return (
    <div
      onDragOver={(event) => {
        dragOver(event);
      }}
      onDrop={(event) => {
        drop(event);
      }}
    >
      <div ref={ref} style={{ marginBottom: "1%", height: "49vh" }} />
    </div>
  );
};

export default Map;
