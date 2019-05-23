//Fake response pro trabalho 1

//Action Creators...
/*******************************************************************************************
 *  USER ACTIONS CRUD
 ******************************************************************************************/
export const loginUser = (email, password) => dispatch => {
  const response = {
    code: 0,
    message: "",
    data: {}
  };

  if (email === "john@asdf.com" && password === "123456a") {
    response.code = 200;
    response.message = "";
    response.data = { token: "asdfg1234" };
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
  const response = {
    code: 0,
    message: "",
    data: {}
  };

  //Fake response
  if (name !== "" && email !== "" && password !== "") {
    response.code = 201;
    response.message = "Created";
    response.data = { id: 2, name: name, email: email };
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

export const updateUser = (token, name, email, password) => dispatch => {
  const response = {
    code: 0,
    message: "",
    data: {}
  };

  response.code = 200;
  response.message = "";
  response.data = { id: 2, name: name, email: email };

  dispatch({
    type: "UPDATE_USER",
    payload: response
  });
};

export const deleteUser = token => dispatch => {
  const response = {
    code: 0,
    message: "",
    data: {}
  };

  response.code = 204;
  response.message = "";
  response.data = {};

  dispatch({
    type: "DELETE_USER",
    payload: response
  });
};

export const getUser = token => dispatch => {
  const response = {
    code: 0,
    message: "",
    data: {}
  };

  if (token !== "") {
    response.code = 200;
    response.message = "";
    response.data = { id: 1, name: "John Doe", email: "john@asdf.com" };
  } else {
    response.code = 401;
    response.message = "Not authorized";
    response.data = {};
  }

  dispatch({
    type: "DETAIL_USER",
    payload: response
  });
};

/*******************************************************************************************
 *  BOOK ACTIONS CRUD
 ******************************************************************************************/
export const listBook = _ => dispatch => {
  const response = {
    code: 0,
    message: "",
    data: {}
  };

  response.code = 200;
  response.message = "";
  response.data = {
    results: [
      {
        id: 1,
        name: "As tranças da vovó careca",
        image: "linkImage.com",
        keywords: ["Ação", "Aventura", "Super-heróis"],
        rate: 5
      },
      {
        id: 2,
        name: "Poeira em alto mar",
        image: "linkImage.com",
        keywords: ["Suspense", "Fantasia", "Terror"],
        rate: 2
      },
      {
        id: 3,
        name: "A volta dos que não foram",
        image: "linkImage.com",
        keywords: ["Romance", "Comédia", "Drama"],
        rate: 4.5
      },
      {
        id: 4,
        name: "Morre hoje quem nunca havia morrido",
        image: "linkImage.com",
        keywords: ["Terror", "Ação", "Suspense"],
        rate: 5
      }
    ],
    size: 3,
    total: 3
  };

  dispatch({
    type: "LIST_BOOK",
    payload: response
  });
};

export const detailBook = bookId => dispatch => {
  const response = {
    code: 0,
    message: "",
    data: {}
  };

  response.code = 200;
  response.message = "";
  response.data = {
    id: 1,
    name: "Historia que o prates inventou",
    overview: "Uma historia com muita adrenalina e aventura...",
    theme: ["Acao", "Aventura", "Terror"],
    image: "linkImage.com",
    keywords: ["historia", "prates", "invetou"],
    rate: 5
    //Qualquer outro atributo que eu n lembro agr
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
  const response = {
    code: 0,
    message: "",
    data: {}
  };

  if (token !== "") {
    response.code = 200;
    response.message = "";
    response.data = {
      id: 1,
      name: "Historia que o prates inventou",
      text: "Trecho da historia antes de um decisão...",
      decision: ["Desfecho 1", "Desfecho 2", "Desfecho 3"]
    };
  } else {
    response.code = 412;
    response.message = "Precondition failed";
    response.data = {};
  }

  dispatch({
    type: "READ_BOOK",
    payload: response
  });
};

export const createBook = (token, book) => dispatch => {
  const response = {
    code: 0,
    message: "",
    data: {}
  };

  response.code = 201;
  response.message = "Created";
  response.data = {
    /*Retorar detalhe do livro*/
  };

  dispatch({
    type: "CREATE_BOOK",
    payload: response
  });
};

export const deleteBook = (token, bookId) => dispatch => {
  const response = {
    code: 0,
    message: "",
    data: {}
  };

  response.code = 204;
  response.message = "";
  response.data = {};

  dispatch({
    type: "DELETE_BOOK",
    payload: response
  });
};
