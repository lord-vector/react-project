import React from "react";
import DataContext from "./DataContext";

export default function ContextProvider({ children }) {
  return <DataContext.Provider>{children}</DataContext.Provider>;
}
