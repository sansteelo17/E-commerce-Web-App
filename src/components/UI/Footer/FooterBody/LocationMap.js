import { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2Vyb3kxNyIsImEiOiJjbDczNW0xc3UwMmtuM3BxdXZ3ZzZkdTY5In0.R-vc3omG9IOArUhdeNFVrA";

const LocationMap = () => {
  const mapContainer = useRef();
  const map = useRef();
  const lng = useState(5.700531)[0];
  const lat = useState(5.879698)[0];
  const zoom = useState(9)[0];

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div
      ref={mapContainer}
      className="lg:w-2/5 h-48 mb-12 sm:grow lg:grow-0 sm:mt-4 lg:mt-2"
    />
  );
};

export default LocationMap;
