import actionTypes from "../actions/actionTypes";

const usersReducer = (user = { isAuthenticated: false }, action) => {
  let newUser = user;
  switch (action.type) {
    case actionTypes.loginUser:
      break;
    default:
      newUser = user;
  }
  return newUser;
};

export default usersReducer;
