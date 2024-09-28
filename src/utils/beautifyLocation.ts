import { LocationObject } from "expo-location";

function beautifyCoords(
  l: LocationObject | LocationObject["coords"],
  options?: { toFixed?: number },
): { latitude: string; longitude: string; heading?: string } {
  if ("coords" in l) {
    return beautifyCoords(l.coords);
  }
  return {
    latitude: l.latitude.toFixed(options?.toFixed ?? 3),
    longitude: l.longitude.toFixed(options?.toFixed ?? 3),
    heading: l.heading?.toFixed(options?.toFixed ?? 3),
  };
}

export { beautifyCoords };
