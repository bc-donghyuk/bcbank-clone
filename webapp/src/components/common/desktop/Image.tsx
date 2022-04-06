import React from "react";
import classnames from "classnames";

import imageHelpers from "utils/images";

interface Props {
  assetId: string;
  classNames?: string | string[];
  component?: React.ReactNode | HTMLElement;
}

const Image: React.FC<Props> = ({ assetId, classNames, component }) => {
  const meta = imageHelpers.fetchMeta(assetId);
  const ImgComponent: React.ReactNode | HTMLElement = component || "img";

  if (!meta) {
    return null;
  }

  return <ImgComponent src={meta.paths.x1} alt={meta.alt} className={classnames(classNames)} />;
};

export default Image;
