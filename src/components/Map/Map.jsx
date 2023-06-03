import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = (props) => {
  console.log(props);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyBFqfrYwiuiwtgJ1qLBRRjPIiW3j_F-zbA",
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: +props.lat, lng: +props.lng }, // San Francisco coordinates
        zoom: 20,
      });

      new window.google.maps.Marker({
        position: { lat: +props.lat, lng: +props.lng }, // San Francisco coordinates
        map: map,
        title: "Hello World!",
      });
    });
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ height: "100%", width: "80%", borderRadius: 10, margin: "auto" }}
    />
  );
};

export default GoogleMap;
