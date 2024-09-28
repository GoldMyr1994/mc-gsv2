import { createContext } from "react";
import { AuthenticationContextState } from "./types";

const AuthenticationContext =
  createContext<Nullable<AuthenticationContextState>>(null);

export { AuthenticationContext };
