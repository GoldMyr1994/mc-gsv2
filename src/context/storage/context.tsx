import { createContext } from "react";
import { StorageContextState } from "./types";

const StorageContext = createContext<Nullable<StorageContextState>>(null);

export { StorageContext };
