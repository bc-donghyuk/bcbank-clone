import { useQuery } from "react-query";

import userService from "services/userService";
import { userProfileKeys } from "queries/user/queryKey";

// TODO : return 타입 추가, return 값 IUSER 적용
const fetchUserProfile = async () => {
  const { data } = await userService.getProfile();
  return data;
};

const useUserProfileQuery = () => {
  return useQuery(userProfileKeys.all, () => fetchUserProfile());
};

export default useUserProfileQuery;
