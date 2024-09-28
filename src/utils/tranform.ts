import { LocationObject } from "expo-location";
import { pick } from "lodash";
import { LatLng } from "react-native-maps";

function locationObjectToLatLng(location: LocationObject): LatLng {
  return pick(location.coords, ["latitude", "longitude"]);
}

export { locationObjectToLatLng };
