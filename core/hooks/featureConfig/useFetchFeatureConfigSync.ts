import { useEffect } from "react";

import { useFetchFeatureConfig } from "recoil/atoms/featureConfigState";

export const useFetchFeatureConfigSync = () => {
  const fetchData = useFetchFeatureConfig();
  useEffect(() => {
    fetchData();
  }, [fetchData]);
};
