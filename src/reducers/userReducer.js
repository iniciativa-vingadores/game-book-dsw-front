//Reducer de usuario

export default (state = null, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, auth: action.payload };
    case "REGISTER_USER":
      return { ...state, info: action.payload };
    case "UPDATE_USER":
      return { ...state, info: action.payload };
    case "DELETE_USER":
      return { ...state, info: action.payload };
    default:
      return state;
  }
};
