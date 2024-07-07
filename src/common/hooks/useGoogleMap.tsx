import { useEffect, useState, RefObject } from "react";

type Location = {
  lat: number;
  lng: number;
};

type UseGoogleMapResult = {
  googleMap: google.maps.Map | null;
  marker: google.maps.Marker | null;
  setMarker: React.Dispatch<React.SetStateAction<google.maps.Marker | null>>;
};

export const useGoogleMap = (ref: RefObject<HTMLDivElement>, locations: Location[]): UseGoogleMapResult => {
  const [googleMap, setGoogleMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  useEffect(() => {
    if (!ref.current || googleMap) return;

    const initializeMap = () => {
      if (ref.current) {
        const map = new google.maps.Map(ref.current, {
          center: { lat: locations[0].lat, lng: locations[0].lng },
          zoom: 8,
        });
        setGoogleMap(map);
        const newMarker = new google.maps.Marker({
          position: { lat: locations[0].lat, lng: locations[0].lng },
          map: map,
        });
        setMarker(newMarker);
      }
    };

    if (typeof google !== "undefined") {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    }
  }, [ref, googleMap, locations]);

  return { googleMap, marker, setMarker };
};
