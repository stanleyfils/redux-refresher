// reducer 1
// declared state will be set to intial value of state

// replacing +1 with action.payload on line 6 pulls the parameter (number) from the increment function in actions/index.js and the value from the app.js increment button. Always use action.payload to describe your payload or parameer.
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
