export default (state = null, action) => {
  if (action.type === "ERROR_HANDLER") {
    return { ...state, error: action.payload };
  }
  return state;
};
