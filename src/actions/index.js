//Fake response pro trabalho 1
const response = {
  code: 0,
  message: "",
  data: {}
};

//Action Creators...
export const loginUser = (email, password) => dispatch => {
  if (email === "john@asdf.com" && password === "123456a") {
    response.code = 200;
    response.message = "";
    response.data = {
      id: "1",
      email: "john@asdf.com",
      token: "asdfg1234"
    };
  } else {
    response.code = 401;
    response.message = "Not authorized";
    response.data = {};
  }

  dispatch({
    type: "LOGIN_USER",
    payload: response
  });
};

export const registerUser = (name, email, password) => dispatch => {
  //Fake response
  if (name !== "" && email !== "" && password !== "") {
    response.code = 201;
    response.message = "Created";
    response.data = { id: 1, name: name, email: email };
  } else {
    response.code = 400;
    response.message = "Bad request";
    response.data = {};
  }

  dispatch({
    type: "REGISTER_USER",
    payload: response
  });
};
