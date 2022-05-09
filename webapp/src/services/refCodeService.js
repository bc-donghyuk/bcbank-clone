export const REF_CODE_KEY = "refcod";
export const REF_TYPE_KEY = "reftyp";

export const setRefCode = (code, type) => {
  sessionStorage.setItem(REF_CODE_KEY, code);
  sessionStorage.setItem(REF_TYPE_KEY, type);
};

export const unsetRefCode = () => {
  sessionStorage.removeItem(REF_CODE_KEY);
  sessionStorage.removeItem(REF_TYPE_KEY);
};
