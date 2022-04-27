import httpService from "@core/services/httpService";

let globalAccessToken: string | null = null;

// TODO : Update axios response interceptors

httpService.baseAxios.interceptors.request.use(config => {
  if (globalAccessToken != null) {
    config.headers.Authorization = `Bearer ${globalAccessToken}`;
  }
  return config;
});

const updateAccessToken = async (accessToken: string) => {
  globalAccessToken = accessToken;
};

const checkAndUpdateAccessToken = (accessToken: any): boolean => {
  if (accessToken) {
    updateAccessToken(accessToken);
    return true;
  }

  return false;
};

const getAccessToken = async () => {
  try {
    if (globalAccessToken === null) {
      throw new Error("access token doesn't exist");
    }
    return Promise.resolve(globalAccessToken);
  } catch (error) {
    throw error;
  }
};

const removeAccessToken = async () => {
  try {
    globalAccessToken = null;
  } catch (ex) {}
};

const configure = () => {
  httpService.configure({
    baseURL: process.env.API_ROOT || "http://localhost:8000",
    checkAndUpdateAccessToken,
    getAccessToken,
    removeAccessToken,
  });
};

export default {
  configure,
};
