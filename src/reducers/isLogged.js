// reducer 2
// declared state will be set to intial value of state
const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "sign-in":
      return !state;
    default:
      return state;
  }
};

export default isLoggedReducer;
