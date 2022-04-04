import { useState, useEffect } from "react";

const Marker = (props) => {
  const { position, map } = props;
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    setMarker(new window.google.maps.Marker({}));
  }, []);

  if (marker) {
    marker.setMap(map);
    marker.setPosition(position);
  }
};

export default Marker;
