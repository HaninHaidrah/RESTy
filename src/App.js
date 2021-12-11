import React, { useState } from "react";

import "./app.scss";
import Header from "./compononts/header";
import Footer from "./compononts/Footer";
import Form from "./compononts/Form";
import Results from "./compononts/Result";
import axios from "axios";

export default function App() {
  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});
  let [count, setCount] = useState(0);
  let [header, setHeader] = useState([]);

 let callApi = async (requestParams, updateBody) => {
    const respond = await axios.get(requestParams.url);
    setData(respond.data.results);
    setRequestParams(requestParams);
    setCount(respond.data.count);
    setHeader({
      root: "fakeData",
      cache_control: "string public",
      age: "86400",
      s_maxage: "86400",
    });

    const update = {
      count: 2,
      Header: [
        {
          root: "fakeData",
          cache_control: "string public",
          age: "86400",
          s_maxage: "86400",
        },
      ],
      Results: [{ body: updateBody }],
    };
    if (updateBody) {
      setData(update);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="div1" data-testid="url">
        {" "}
        {requestParams.method} {requestParams.url}
      </div>

      <Form handleApiCall={callApi} />
      <Results data={data} count={count} header={header} />
      <Footer />
    </React.Fragment>
  );
}
