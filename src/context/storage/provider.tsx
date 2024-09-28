import { PropsWithChildren } from "react";
import { StorageContext } from "./context";

function StorageContextProvider(props: PropsWithChildren) {
  const { children } = props;

  return (
    <StorageContext.Provider value={{}}>{children}</StorageContext.Provider>
  );
}

export { StorageContextProvider };
