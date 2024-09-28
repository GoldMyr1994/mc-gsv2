import { useAuthenticationContext } from "./use-authentication-context";

function useUserId() {
  const { user } = useAuthenticationContext();

  return user?.uid ?? "";
}

export { useUserId };
