import React from "react";
import "./result.scss";
import JSONPretty from 'react-json-pretty';

export default function Results(data) {
  return (
    <section className="result">
      <pre>
        {data ? <JSONPretty data={data}></JSONPretty> : <h2>Loading..</h2>}
      </pre>
    </section>
  );
}
