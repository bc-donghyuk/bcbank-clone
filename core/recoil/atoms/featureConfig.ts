import { atom } from "recoil";

interface featureConfigStateProps {
  data: Record<string, number> | null;
}

export const featureConfigState = atom({
  key: "featureConfigState",
  default: { data: null } as featureConfigStateProps,
});
