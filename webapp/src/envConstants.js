export const IS_PRODUCTION = process.env.NODE_ENV === "production" && process.env.APP_ENV === "production";
export const IS_STAGING = process.env.NODE_ENV === "production" && process.env.APP_ENV === "staging";
export const IS_DEV = process.env.NODE_ENV === "development" && process.env.APP_ENV === "dev";
export const IS_STAGING_OR_PRODUCTION = IS_PRODUCTION || IS_STAGING;
