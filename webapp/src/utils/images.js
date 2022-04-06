import assetMap from "assets/assetMap";

const imageHelpers = {
  fetchMeta: id => {
    const meta = assetMap[id];
    if (meta) return meta;
    return null;
  },
};

export default imageHelpers;
