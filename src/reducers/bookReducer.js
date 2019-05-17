//Reducer de usuario

export default (state = null, action) => {
  switch (action.type) {
    case "LIST_BOOK":
      return { ...state, list: action.payload };
    case "DETAIL_BOOK":
      return { ...state, detail: action.payload };
    case "READ_BOOK":
      return { ...state, read: action.payload };
    default:
      return state;
  }
};
