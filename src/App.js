import React, { useReducer } from "react";
import "./app.scss";
import Header from "./compononts/header";
import Footer from "./compononts/Footer";
import Form from "./compononts/Form";
import Results from "./compononts/Result";
import History from "./compononts/History";
import axios from "axios";
let initialhist = [];

let reducer2 = (history = initialhist, action) => {
  let { type, payload } = action;
  switch (type) {
    case "addToHistory":
      history = [...history, payload];
      return history;
    default:
      return state;
  }
};
const intial = {
  url: "",
  method: "",
  result: "null",
};

let reducer = (state = intial, action) => {
  let { type, payload } = action;
  switch (type) {
    case "reqParams":
      return {
        ...state,
        url: payload.url,
        method: payload.method,
        result: payload.result,
      };
    default:
      return state;
  }
};

// handle payload for reqParams:
const params = (url, method, result) => {
  return {
    type: "reqParams",
    payload: {
      url,
      method,
      result,
    },
  };
};
const historyAdd = (url, method, result) => {
  return {
    type: "addToHistory",
    payload: {
      url,
      method,
      result,
    },
  };
};

export default function App() {
  const [vars, dispatch] = useReducer(reducer, intial);
  const [history, dispatch2] = useReducer(reducer2, initialhist);

  const callApi = async (requestParams, requestBody) => {
    //get the url and method:
    dispatch(params(requestParams.url, requestParams.method));

    // to get the results and then save them :
    let respond = await axios.get(requestParams.url);
    dispatch(params(requestParams.url, requestParams.method, respond.data));
    dispatch2(
      historyAdd(requestParams.url, requestParams.method, respond.data)
    );
  };
  console.log(vars);
  console.log(history);

  function historyfunc(url, method, result) {
    dispatch(params(url, method, result));
  }
  return (
    <>
      <React.Fragment>
        <Header />
        <div className="div1" data-testid="url">
          {" "}
          {vars.method} {vars.url}
        </div>

        <Form handleApiCall={callApi} />
        {history && <History historyfunc={historyfunc} history={history} />}

        <Results data={vars.result} />
        <Footer />
      </React.Fragment>
    </>
  );
}
