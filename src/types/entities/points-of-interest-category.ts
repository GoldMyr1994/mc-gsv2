export {};

export type PointsOfInterestCategory = ServerEntity<{
  readonly name: string;
}>;

export type ApiPointsOfInterestCategoryListResponse =
  ApiEntityListResponse<PointsOfInterestCategory>;
