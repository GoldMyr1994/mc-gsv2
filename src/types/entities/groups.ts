export type Group = ServerEntity<{
  name: string;
}>;

export type ApiGroupListResponse = ApiEntityListResponse<Group>;
