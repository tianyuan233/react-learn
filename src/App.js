import React from "react";
import ReactDOM from "react-dom";
import SeachParams from "./SearchParams";
const Pet = (props) => {
  return (
    <div className="Pet">
      <h2>{props.name}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Pet name="Mittens" />
      <SeachParams />
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById("root"));
