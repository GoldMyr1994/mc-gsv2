import { LatLng } from "react-native-maps";

function latLngProjection(
  point: unknown,
  line: [LatLng, LatLng],
  limitToSegment: boolean,
) {
  return {
    latitude: 0,
    longitude: 0,
    heading: 0,
  };
}

function getOrthogonalSegment(segment: [LatLng, LatLng]): [LatLng, LatLng] {
  return [
    {
      latitude: 0,
      longitude: 0,
    },
    {
      latitude: 0,
      longitude: 0,
    },
  ];
}
/**
 * The isOnSameSide function determines if two points, c and p, are on the same side of a line defined by two other points, a and b.
 */
function isOnSameSide(a: LatLng, b: LatLng, c: LatLng, p: LatLng) {
  return true;
}

export { latLngProjection, getOrthogonalSegment, isOnSameSide };
