declare type Optional<T> = T | undefined;
declare type Nullable<T> = T | null;

declare type ServerEntity<T> = Readonly<T & { id: string }>;

declare type ApiEntityListResponse<T> = Readonly<{
  skip: number;
  limit: number;
  totalResources: number;
  resources: T[];
}>;
