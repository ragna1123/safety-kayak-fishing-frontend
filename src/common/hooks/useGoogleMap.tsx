import { useEffect, useState } from "react";

type Location = {
  lat: number;
  lng: number;
  // 他に必要なフィールドがあればここに追加
};

export const useGoogleMap = (ref: React.RefObject<HTMLDivElement>, locations: Location[]) => {
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
        locations.forEach((location) => {
          const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
          });
          setMarker(marker);
        });
      }
    };

    if (typeof google !== "undefined") {
      initializeMap();
    } else {
      const handleLoad = () => initializeMap();
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [ref, googleMap, locations]);

  return { googleMap, marker };
};
