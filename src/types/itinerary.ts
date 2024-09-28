import { LatLng } from "react-native-maps";

import { ComputeRouteResponse } from "./compute-routes";

export type Itinerary = ComputeRouteResponse[];

export interface ItineraryComputedPolylineCoordinates {
  routes: LatLng[];
  legs: LatLng[];
  steps: LatLng[];
  points: {
    latLng: LatLng;
    index: {
      global: number;
      step: number;
      leg: number;
      route: number;
      response: number;
    };
  }[];
}

export type ItineraryComputed = Readonly<{
  duration: {
    value: number;
    valueUnit: string;
    representation: string;
  };
  distance: {
    value: number;
    valueUnit: string;
    representation: string;
  };
  polylineCoordinates: ItineraryComputedPolylineCoordinates;
}>;
