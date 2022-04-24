import { useQuery } from "react-query";

import userService from "../../services/userService";
import { profileKeys } from "./queryKey";

// TODO : return 타입 추가, return 값 IUSER 적용, 전체적인 네이밍 수정
const fetchProfile = async () => {
  const { data } = await userService.getProfile();
  return data;
};

const useProfileQuery = () => {
  return useQuery(profileKeys, () => fetchProfile());
};

export default useProfileQuery;
