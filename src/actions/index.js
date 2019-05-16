//Action Creators...
export const loginUser = (email, password) => dispatch => {
  let response;

  if (email === "john@asdf.com" && password === "123456a") {
    response = {
      code: 200,
      message: "",
      data: {
        id: "1",
        name: "John Doe",
        email: "john@asdf.com",
        token: "asdfg1234"
      }
    };
  } else {
    response = {
      code: 401,
      message: "Not authorized bitch",
      data: {}
    };
  }

  dispatch({
    type: "LOGIN_USER",
    payload: response
  });
};

const registerUser = (name, email, password) => dispatch => {
  //Fake response
  const response = {
    code: 200,
    message: "",
    data: {}
  };

  dispatch({
    type: "LOGIN_USER",
    payload: response
  });
};
