import { useAuthenticationContext } from "./use-authentication-context";

function useUser() {
  const { user } = useAuthenticationContext();

  return user;
}

export { useUser };
