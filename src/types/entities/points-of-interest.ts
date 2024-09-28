import { Tour } from "./tour";

export type PointOfInterest = ServerEntity<{
  placeId: string;
  name: string;
  formattedAddress: string;
  lat: number;
  lng: number;
  files?: unknown[];
  tours?: Tour[];
}>;

export type ApiPointsOfInterestListResponse =
  ApiEntityListResponse<PointOfInterest>;
