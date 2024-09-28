import { useContext } from "react";

import { AuthenticationContext, AuthenticationContextState } from "@/context";

function useAuthenticationContext() {
  const ctx = useContext(AuthenticationContext);

  if (!ctx) {
    throw new Error(
      "AuthenticationContext must be used within an AuthenticationProvider",
    );
  }

  // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
  return useContext(AuthenticationContext) as AuthenticationContextState;
}

export { useAuthenticationContext };
