import React, { useState, useEffect } from "react";
import "./app.scss";
// import "./compononts/Result/result.scss";
import Header from "./compononts/header";
import Footer from "./compononts/Footer";
import Form from "./compononts/Form";
import Results from "./compononts/Result";
import axios from "axios";

export default function App() {
  let [data, setData] = useState(null);
  let [requestParams, setrequestParams] = useState({});
  let [header, setHeader] = useState({});
  const [state, setState] = useState(false);
  let [reqBody, setBody] = useState("");


  const callApi = async (requestParams, requestBody) => {
    setrequestParams(requestParams);
    setBody(requestBody);
    setHeader({
      root: requestParams.url,
      cache_control: "string public",
      age: "86400",
      s_maxage: "86400",
    });
  };
  useEffect(async () => {
    const requestforCreate = {
      body: reqBody,
    };
    let respond;
    if (requestParams.url) {
      setData(null);
      requestParams.method == "get"
        ? (respond = await axios.get(requestParams.url))
        : (respond = await axios.post(
            requestParams.url,
            requestforCreate.body
          ));
      setData(respond.data);
    }
  }, [requestParams.method, requestParams.url]);
  console.log();

  useEffect(() => {
    setTimeout(() => {
      setState(!state);
    }, 5000);
  }, [data]);


  return (
    <React.Fragment>
      <Header />
      <div className="div1" data-testid="url">
        {" "}
        {requestParams.method} {requestParams.url}
      </div>

      <Form handleApiCall={callApi} />
      <Results data={data}  header={header} state={state} />
      <Footer />
    </React.Fragment>
  );
}
