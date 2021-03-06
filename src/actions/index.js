import gbServer from "../api/gameBookServer";

//Action Creators...

export const createError = error => dispatch => {
  dispatch({
    type: "ERROR_HANDLER",
    payload: error
  });
};

export const deleteError = _ => dispatch => {
  dispatch({
    type: "ERROR_HANDLER",
    payload: null
  });
};

/*******************************************************************************************
 *  USER ACTIONS CRUD
 ******************************************************************************************/
export const loginUser = (email, password) => async dispatch => {
  const response = await gbServer.post("/login", { email, password });

  dispatch({
    type: response.status === 200 ? "LOGIN_USER" : "ERROR_HANDLER",
    payload: response.data
  });
};

export const logoutUser = _ => dispatch => {
  dispatch({
    type: "LOGIN_USER",
    payload: null
  });
};

export const removeDetailUser = _ => dispatch => {
  dispatch({
    type: "REGISTER_USER",
    payload: null
  });
};

export const registerUser = (name, email, password) => async dispatch => {
  const response = await gbServer.post("/customers", { name, email, password });

  dispatch({
    type: response.status === 201 ? "REGISTER_USER" : "ERROR_HANDLER",
    payload: response.data
  });
};

export const updateUser = (
  token,
  id,
  name,
  email,
  password
) => async dispatch => {
  const response = await gbServer.put(
    "/customers",
    { id, name, email, password },
    { headers: { Authorization: token } }
  );

  dispatch({
    type: response.status === 200 ? "UPDATE_USER" : "ERROR_HANDLER",
    payload: { ...response.data, code: response.status }
  });
};

export const deleteUser = (token, idCustomer) => async dispatch => {
  const response = await gbServer.delete(`/customers/${idCustomer}`, {
    headers: { Authorization: token }
  });

  dispatch({
    type: response.status === 204 ? "DELETE_USER" : "ERROR_HANDLER",
    payload: response.data
  });
};

export const getUser = (token, idCustomer) => async dispatch => {
  const response = await gbServer.get(`/customers/${idCustomer}`, {
    headers: { Authorization: token }
  });

  dispatch({
    type: response.status === 200 ? "DETAIL_USER" : "ERROR_HANDLER",
    payload: response.data
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

export const getFlow = () => dispatch => {
  const response =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt cursus nibh. Sed laoreet at massa quis laoreet. Phasellus turpis velit, dignissim vitae lobortis nec, congue sit amet nunc. Vivamus tincidunt elit neque, in vestibulum purus maximus ac. Nam vestibulum pharetra venenatis. In eu odio placerat, gravida tortor in, sollicitudin quam. Suspendisse vehicula efficitur leo non eleifend. Morbi at tempus purus. Suspendisse auctor justo faucibus, consectetur metus ac, aliquam ipsum. Donec eget metus vitae urna dapibus vestibulum sed commodo felis. Morbi fringilla semper nisl a faucibus. Suspendisse potenti. Curabitur in massa massa. Aenean in justo metus. Quisque rutrum volutpat imperdiet. Maecenas fringilla nulla sed posuere mattis. Aliquam faucibus, felis at iaculis lacinia, risus nunc lacinia risus, sit amet luctus magna magna nec diam. Quisque non auctor dui. Ut sed feugiat nisi. Morbi porttitor suscipit enim semper aliquet. Phasellus non consectetur leo. Praesent interdum fringilla tortor in ornare. Nam tristique lacinia sapien sit amet auctor. Sed viverra turpis at volutpat aliquam. Aliquam augue eros, viverra sagittis quam quis, porttitor posuere eros. Duis ornare ornare dolor, ac volutpat velit commodo vel.";
  dispatch({
    type: "FLOW_BOOK",
    payload: response
  });
};

export const deleteFlow = () => dispatch => {
  dispatch({
    type: "FLOW_BOOK",
    payload: null
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
