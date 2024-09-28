export type Maneuver =
  | "MANEUVER_UNSPECIFIED"
  | "TURN_SLIGHT_LEFT"
  | "TURN_SHARP_LEFT"
  | "UTURN_LEFT"
  | "TURN_LEFT"
  | "TURN_SLIGHT_RIGHT"
  | "TURN_SHARP_RIGHT"
  | "UTURN_RIGHT"
  | "TURN_RIGHT"
  | "STRAIGHT"
  | "RAMP_LEFT"
  | "RAMP_RIGHT"
  | "MERGE"
  | "FORK_LEFT"
  | "FORK_RIGHT"
  | "FERRY"
  | "FERRY_TRAIN"
  | "ROUNDABOUT_LEFT"
  | "ROUNDABOUT_RIGHT"
  | "DEPART"
  | "NAME_CHANGE";

export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface Location {
  latLng: LatLng;
  heading?: number;
}

export type Waypoint = {
  via: boolean;
  vehicleStopover: boolean;
  sideOfRoad: boolean;
} & (
  | { location: Location }
  | {
      placeId: string;
    }
  | { address: string }
);

export type WaypointOrigin = Waypoint & { via: false };
export type WaypointDestination = Waypoint & { via: false };

export interface GeocodedWaypoint {
  geocoderStatus: {
    code: number;
    message: string;
    details: unknown[];
  };
  type: string[];
  partialMatch: boolean;
  placeId: string;
  intermediateWaypointRequestIndex: number;
}

export interface VehicleInfo {
  emissionType:
    | "VEHICLE_EMISSION_TYPE_UNSPECIFIED"
    | "GASOLINE"
    | "ELECTRIC"
    | "HYBRID"
    | "DIESEL";
}

export type Polyline =
  | {
      encodedPolyline: string;
    }
  | {
      geoJsonLinestring: object;
    };

export interface SpeedReadingInterval {
  startPolylinePointIndex: number;
  endPolylinePointIndex: number;
  // Union field speed_type can be only one of the following:
  speed: "SPEED_UNSPECIFIED" | "NORMAL" | "SLOW" | "TRAFFIC_JAM";
  // End of list of possible types for union field speed_type.
}

export interface RouteModifiers {
  avoidTolls: boolean;
  avoidHighways: boolean;
  avoidFerries: boolean;
  avoidIndoor: boolean;
  vehicleInfo: VehicleInfo;
  tollPasses: never[];
}

export interface Money {
  currencyCode: string;
  units: string;
  nanos: number;
}

export interface TransitPreferences {
  allowedTravelModes: (
    | "TRAVEL_MODE_UNSPECIFIED"
    | "DRIVE"
    | "BICYCLE"
    | "WALK"
    | "TWO_WHEELER"
    | "TRANSIT"
  )[];
  routingPreference:
    | "TRANSIT_ROUTING_PREFERENCE_UNSPECIFIED"
    | "LESS_WALKING"
    | "FEWER_TRANSFERS";
}

export interface Route {
  routeLabels: (
    | "ROUTE_LABEL_UNSPECIFIED"
    | "DEFAULT_ROUTE"
    | "DEFAULT_ROUTE_ALTERNATE"
    | "FUEL_EFFICIENT"
  )[];
  legs: RouteLeg[];
  distanceMeters: number;
  duration: string;
  staticDuration: string;
  polyline: Polyline;
  description: string;
  warnings: string[];
  viewport: {
    low: LatLng;
    high: LatLng;
  };
  travelAdvisory: {
    tollInfo: TollInfo;
    speedReadingIntervals: SpeedReadingInterval[];
    fuelConsumptionMicroliters: string;
    routeRestrictionsPartiallyIgnored: boolean;
    transitFare: Money;
  };
  optimizedIntermediateWaypointIndex: number[];
  localizedValues: {
    distance: LocalizedText;
    duration: LocalizedText;
    staticDuration: LocalizedText;
    transitFare: LocalizedText;
  };
  routeToken: string;
}

export interface NavigationInstruction {
  maneuver: Maneuver;
  instructions: string;
}

export interface TollInfo {
  estimatedPrice: Money[];
}

export interface RouteLeg {
  distanceMeters: number;
  duration: string;
  staticDuration: string;
  polyline: Polyline;
  startLocation: Location;
  endLocation: Location;
  steps: RouteLegStep[];
  travelAdvisory: {
    tollInfo: TollInfo;
    speedReadingIntervals: SpeedReadingInterval[];
  };
  localizedValues: {
    distance: LocalizedText;
    duration: LocalizedText;
    staticDuration: LocalizedText;
  };
  stepsOverview: {
    multiModalSegments: [
      {
        navigationInstruction: NavigationInstruction;
        travelMode:
          | "TRAVEL_MODE_UNSPECIFIED"
          | "DRIVE"
          | "BICYCLE"
          | "WALK"
          | "TWO_WHEELER"
          | "TRANSIT";
        stepStartIndex: number;
        stepEndIndex: number;
      },
    ];
  };
}

export interface LocalizedText {
  text: string;
  languageCode: string;
}

export interface TransitStop {
  name: string;
  location: Location;
}

export interface LocalizedTime {
  time: LocalizedText;
  timeZone: string;
}

export interface RouteLegStep {
  distanceMeters: number;
  staticDuration: string;
  polyline: Polyline;
  startLocation: Location;
  endLocation: Location;
  navigationInstruction: NavigationInstruction;
  travelAdvisory: {
    speedReadingIntervals: SpeedReadingInterval[];
  };
  localizedValues: {
    distance: LocalizedText;
    staticDuration: LocalizedText;
  };
  transitDetails: {
    stopDetails: {
      arrivalStop: TransitStop;
      arrivalTime: string;
      departureStop: TransitStop;
      departureTime: string;
    };
    localizedValues: {
      arrivalTime: LocalizedTime;
      departureTime: LocalizedTime;
    };
    headsign: string;
    headway: string;
    transitLine: {
      agencies: {
        name: string;
        phoneNumber: string;
        uri: string;
      }[];
      name: string;
      uri: string;
      color: string;
      iconUri: string;
      nameShort: string;
      textColor: string;
      vehicle: {
        name: LocalizedText;
        type:
          | "TRANSIT_VEHICLE_TYPE_UNSPECIFIED"
          | "BUS"
          | "CABLE_CAR"
          | "COMMUTER_TRAIN"
          | "FERRY"
          | "FUNICULAR"
          | "GONDOLA_LIFT"
          | "HEAVY_RAIL"
          | "HIGH_SPEED_TRAIN"
          | "INTERCITY_BUS"
          | "LONG_DISTANCE_TRAIN"
          | "METRO_RAIL"
          | "MONORAIL"
          | "OTHER"
          | "RAIL"
          | "SHARE_TAXI"
          | "SUBWAY"
          | "TRAM"
          | "TROLLEYBUS";
        iconUri: string;
        localIconUri: string;
      };
    };
    stopCount: number;
    tripShortText: string;
  };
  travelMode:
    | "TRAVEL_MODE_UNSPECIFIED"
    | "DRIVE"
    | "BICYCLE"
    | "WALK"
    | "TWO_WHEELER"
    | "TRANSIT";
}

export interface ComputeRoutesRequest {
  origin: WaypointOrigin;
  destination: WaypointDestination;
  intermediates?: Waypoint[];
  travelMode?:
    | "TRAVEL_MODE_UNSPECIFIED"
    | "DRIVE"
    | "BICYCLE"
    | "WALK"
    | "TWO_WHEELER"
    | "TRANSIT";
  routingPreference?:
    | "ROUTING_PREFERENCE_UNSPECIFIED"
    | "TRAFFIC_UNAWARE"
    | "TRAFFIC_AWARE"
    | "TRAFFIC_AWARE_OPTIMAL";
  polylineQuality?:
    | "POLYLINE_QUALITY_UNSPECIFIED"
    | "HIGH_QUALITY"
    | "OVERVIEW";
  polylineEncoding?:
    | "POLYLINE_ENCODING_UNSPECIFIED"
    | "ENCODED_POLYLINE"
    | "GEO_JSON_LINESTRING";
  departureTime?: string;
  arrivalTime?: string;
  computeAlternativeRoute?: boolean;
  routeModifier?: RouteModifiers;
  languageCode?: string;
  regionCode?: string;
  units?: "UNITS_UNSPECIFIED" | "METRIC" | "IMPERIAL";
  optimizeWaypointOrder?: boolean;
  requestedReferenceRoutes?: "REFERENCE_ROUTE_UNSPECIFIED" | "FUEL_EFFICIENT";
  extraComputations?: (
    | "EXTRA_COMPUTATION_UNSPECIFIED"
    | "TOLLS"
    | "FUEL_CONSUMPTION"
    | "TRAFFIC_ON_POLYLINE"
    | "HTML_FORMATTED_NAVIGATION_INSTRUCTIONS"
  )[];
  trafficModel?:
    | "TRAFFIC_MODEL_UNSPECIFIED"
    | "BEST_GUESS"
    | "PESSIMISTIC"
    | "OPTIMISTIC";
  transitPreferences?: TransitPreferences;
}

export interface ComputeRouteResponse {
  routes: Route[];
  fallbackInfo: {
    routingMode:
      | "FALLBACK_ROUTING_MODE_UNSPECIFIED"
      | "FALLBACK_TRAFFIC_UNAWARE"
      | "FALLBACK_TRAFFIC_AWARE";
    reason: "FALLBACK_REASON_UNSPECIFIED" | "SERVER_ERROR" | "LATENCY_EXCEEDED";
  };
  geocodingResults: {
    origin: GeocodedWaypoint;
    destination: GeocodedWaypoint;
    intermediates: GeocodedWaypoint[];
  };
}
