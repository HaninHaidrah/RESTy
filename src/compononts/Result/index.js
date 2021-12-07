import React from "react";
import "./result.scss";

import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import LoadingSpinner from "../loading/loading";

function Results(data) {
  return (
    <section className="result" data-testid="renderedData">
    <pre>{data.data ? <JSONPretty data={data} /> : <LoadingSpinner/>}</pre>
    </section>
  );
}

export default Results;