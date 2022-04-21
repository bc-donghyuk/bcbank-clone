export const AUTH_IS_LOGGED_IN = "is_logged_in";

export const isLoggedIn = (): boolean => {
  return sessionStorage.getItem(AUTH_IS_LOGGED_IN) === "true";
};

export const setLoggedIn = (value: boolean): void => {
  if (value) {
    sessionStorage.setItem(AUTH_IS_LOGGED_IN, "true");
  } else {
    sessionStorage.removeItem(AUTH_IS_LOGGED_IN);
  }
};
