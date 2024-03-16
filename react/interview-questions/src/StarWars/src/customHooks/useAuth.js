import { useSelector } from "react-redux";

const useAuth = () => {
  return useSelector((state) => state.accountReducer.isLoggedIn);
};

export default useAuth;
