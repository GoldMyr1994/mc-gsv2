import { Group } from "./groups";
import { ObjectFile } from "./object-file";
import { PointOfInterest } from "./points-of-interest";

export type Tour = ServerEntity<{
  name: string;
  itinerary: ObjectFile;
  pointsOfInterest?: PointOfInterest[];
  groups?: Group[];
}>;

export type ApiTourListResponse = ApiEntityListResponse<Tour>;
