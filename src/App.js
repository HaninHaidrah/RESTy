import React from "react";

import "./app.scss";
import './compononts/Result/result.scss';



// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./compononts/header";
import Footer from "./compononts/Footer";
import Form from "./compononts/Form";
import Results from "./compononts/Result";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: "fake thing 1", url: "http://fakethings.com/1" },
        { name: "fake thing 2", url: "http://fakethings.com/2" },
      ],
    };
    this.setState({ data, requestParams });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="div1"> {this.state.requestParams.method}  {this.state.requestParams.url}</div>
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
