import React from "react";
import "react-json-pretty/themes/monikai.css";
import "./index.scss";

function History(props) {
  function viewResults(url,method,result) {
    console.log(result);
    props.historyfunc(url,method,result);
  }
  return (
    <div id="history">
        <h3>History</h3>
      <ul>
        {props.history.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                viewResults(item.url,item.method,item.result);
              }}
            >
              {item.method} {item.url}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default History;
