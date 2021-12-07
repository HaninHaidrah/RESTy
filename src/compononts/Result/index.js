import React from "react";
import "./result.scss";
import JSONPretty from 'react-json-pretty';

export default function Results(data,count, header) {
  return (
    <section className="result" data-testid="renderedData">
      <pre>
        {data ? <JSONPretty  count={count} header={header} data={data} ></JSONPretty> : <h2>Loading..</h2>}
      </pre>
    </section>
  );
}
