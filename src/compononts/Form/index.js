import React, { useState } from "react";
import "./form.scss";

export default function Form({ handleApiCall }) {
  // state variables for methods
  const [getValueofMethod, setgetValueofMethod] = useState("Get");
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [showTextArea, setShowArea] = useState(false);
  let [requestBody, setrequestBody] = useState("");
  let [loading, setLoading] = useState(false);


  // callBack functions for state:
  const handleGetMethod = (e) => {
    e.preventDefault();
    setgetValueofMethod(e.target.id);
    console.log(getValueofMethod);
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
    setLoading(!loading)
    handleApiCall(formData, requestBody,loading);
  };

  const handleShowText = (e) => {
    e.preventDefault();

    setShowArea(!showTextArea);
    setgetValueofMethod(e.target.id);
  };

  const getBody = (e) => {
    e.preventDefault();

    setrequestBody(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={getUrl} />
          <button type="submit" data-testid="butt">GO!</button>
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
