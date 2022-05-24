import React, { Suspense } from "react";

import ProgressBar from "./ProgressBar";

interface Props {
  children: React.ReactNode;
}

const HaruSuspense: React.FC<Props> = ({ children }) => <Suspense fallback={<ProgressBar />}>{children}</Suspense>;

export default HaruSuspense;
