import React from "react";

import "./app.scss";
import "./compononts/Result/result.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./compononts/header";
import Footer from "./compononts/Footer";
import Form from "./compononts/Form";
import Results from "./compononts/Result";
import axios from "axios";
import { toIdSchema } from "react-jsonschema-form/lib/utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      count:0,
     Header: [
            {
              root: "fakeData",
              cache_control: "string public",
              age: "86400",
              s_maxage: "86400",
            },]
    };
  }

  callApi = async (requestParams, updateBody) => {


    const respond= await axios.get(requestParams.url)
    console.log(respond.data);
    // mock output
    // const data = {
    //   count: 2,
    //   Header: [
    //     {
    //       root: "fakeData",
    //       cache_control: "string public",
    //       age: "86400",
    //       s_maxage: "86400",
    //     },
    //   ],
    //   Results: [
    //     { name: "fake thing 1", url: "http://fakethings.com/1" },
    //     { name: "fake thing 2", url: "http://fakethings.com/2" },
    //   ],
    // };
    

    this.setState({ data:respond.data.results, requestParams,count:respond.data.count });

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
      this.setState({ data: update });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="div1" data-testid="url">
          {" "}
          {this.state.requestParams.method} {this.state.requestParams.url}
        </div>
        
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.data} count={this.state.count} header={this.state.Header}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
