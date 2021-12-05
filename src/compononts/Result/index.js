import React from "react";
import './result.scss';



export default function Results(data) {
  return (
    <section className="result">
      <pre>
        {data ? JSON.stringify(data, undefined, 2) : null}
      </pre>
    </section>
  );
}
