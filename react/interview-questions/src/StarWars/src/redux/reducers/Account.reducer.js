const initialStae = {
  isLoggedIn: false,
  userDeatils: null,
};

export const accountReducer = (state = initialStae, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        userDeatils: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
