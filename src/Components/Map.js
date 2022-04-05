import { useEffect, useRef } from "react";

const Map = (props) => {
  const {
    dragOver,
    drop,
    map,
    setMap,
    markers,
    googleMarkers,
    setGoogleMarkers,
  } = props;
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
        const mark = new window.google.maps.Marker({
          position,
          label: `${index + 1}`,
          map,
        });
        setGoogleMarkers([...googleMarkers, mark]);
        return mark;
      });
    }
  }, [map, markers]);

  useEffect(() => {
    if (markers.length === 0 && googleMarkers.length > 0) {
      setGoogleMarkers([]);
    }
  }, [markers, googleMarkers]);

  return (
    <div
      onDragOver={(event) => {
        dragOver(event);
      }}
      onDrop={(event) => {
        drop(event);
      }}
    >
      <div ref={ref} style={{ height: "50vh" }} />
    </div>
  );
};

export default Map;
