import React, { useEffect, useState } from "react";
import "./result.scss";
// import ReactJson from "react-json-view";

// export default function Results(data, header) {
//   console.log(data);

//   return (
//     <>
//       {data.data ? (
//         <section className="result">
//           <ReactJson
//             src={header}
//             name="Headers"
//             iconStyle={"triangle"}
//             collapsed={false}
//             enableClipboard={false}
//             displayDataTypes={false}
//           />

//           <ReactJson
//             src={data}
//             name="Response"
//             iconStyle={"triangle"}
//             collapsed={false}
//             enableClipboard={false}
//             displayDataTypes={false}
//           />
//         </section>
//       ) : (
//         <h2>Loading..</h2>
//       )}
//     </>
//   );
// }

import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import LoadingSpinner from "../loading/loading";

function Results(data) {
  return (
    <section className="result">
    <pre>{data.data ? <JSONPretty data={data} /> : <LoadingSpinner/>}</pre>
    </section>
  );
}

export default Results;