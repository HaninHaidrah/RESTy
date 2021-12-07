import React, { useState, useEffect } from "react";
import "./form.scss";

export default function Form({ handleApiCall }) {
  // state variables for methods
  let [getValueofMethod, setgetValueofMethod] = useState("Get");
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [showTextArea, setShowArea] = useState(false);
  let [requestBody, setrequestBody] = useState("");
  let [loading, setLoading] = useState(false);
  const colors = {
    darkest: "#461111",
    ligth: "#A13333",
    lighter: "#F6F2D4",
  };
  const [color, setColor] = useState(colors.lighter);

  // callBack functions for state:
  const handleGetMethod = (e) => {
    e.preventDefault();
    setgetValueofMethod(e.target.id);
    console.log(getValueofMethod);
    setColor("#461111");
  };
  const getUrl = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
    console.log(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: getValueofMethod,
      url: url,
    };
    setLoading(!loading);
    handleApiCall(formData, requestBody, loading);
  };

  const handleShowText = (e) => {
    e.preventDefault();

    setShowArea(!showTextArea);
    setgetValueofMethod(e.target.id);
    setColor("#461111");
  };

  const getBody = (e) => {
    e.preventDefault();

    setrequestBody(e.target.value);
  };

  useEffect(() => {
    document.getElementById("get").style.background = colors.lighter;
    document.getElementById("post").style.background = colors.lighter;
    document.getElementById("put").style.background = colors.lighter;
    document.getElementById("delete").style.background = colors.lighter;
     getValueofMethod=getValueofMethod.toLocaleLowerCase()
    let v = document.getElementById(`${getValueofMethod}`);
    v.style.background = color;
  }, [getValueofMethod]);
  return (
    <>
      <form onSubmit={handleSubmit} date-testid="submit">
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={getUrl} />
          <button type="submit" data-testid="butt">
            GO!
          </button>
        </label>
        <label className="methods">
          <button id="get" onClick={handleGetMethod}>
            GET
          </button>
          <button id="post" onClick={handleShowText}>
            POST
          </button>
          <button id="put" onClick={handleShowText}>
            PUT
          </button>
          <button id="delete" onClick={handleGetMethod}>
            DELETE
          </button>
        </label>
        //{" "}
        {showTextArea && (
          <textarea name="postAndPut" rows="10" cols="35" onChange={getBody} />
        )}
      </form>
    </>
  );
}
