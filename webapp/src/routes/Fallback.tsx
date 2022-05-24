import { useEffect } from "react";

import hideSpinner from "../helpers/hideSpinner";

const Fallback = () => {
  useEffect(() => {
    return () => {
      hideSpinner();
    };
  }, []);

  return null;
};

export default Fallback;
