import React from "react";
import loadable from "@loadable/component";
import Fallback from "./Fallback";

export default importFunc => {
  return loadable(importFunc, { fallback: <Fallback /> });
};
