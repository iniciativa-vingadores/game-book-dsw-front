export default (state = null, action) => {
  if (action.type === "ERROR_HANDLER") {
    return { ...state, status: action.payload };
  }
  return state;
};
