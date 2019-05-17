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

export const listBook = _ => dispatch => {
  response.code = 200;
  response.message = "";
  response.data = {
    results: [
      {
        /*Estrutura resumida do livro jogo*/
      }
    ],
    size: 1,
    total: 1
  };

  dispatch({
    type: "LIST_BOOK",
    payload: response
  });
};

export const detailBook = bookId => dispatch => {
  response.code = 200;
  response.message = "";
  response.data = {
    /*Estrutura detalhada do livro jogo*/
  };

  dispatch({
    type: "DETAIL_BOOK",
    payload: response
  });
};

//Verifica o token pra saber se ta logado
//Pega o id e a decisao atual do livro
//O livro sera divido por decisoes
export const readBook = (token, bookId, decisionBook) => dispatch => {
  response.code = 200;
  response.message = "";
  response.data = {
    /*Estrutura detalhada do livro jogo*/
  };

  dispatch({
    type: "READ_BOOK",
    payload: response
  });
};
