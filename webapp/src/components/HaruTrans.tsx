import React from "react";
import { Trans } from "react-i18next";

const HaruTrans = (props: any) => {
  return (
    <Trans
      components={{
        br: <br />,
        b: <b />,
      }}
      {...props}
    />
  );
};

export default HaruTrans;
