import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Namaste React using JSX</h1>;

// React Functional Component(function that returns some jsx code or a function which returns a react element)

const elem = <span>React Element</span>;

const title = (
  <h1 className="head">
    {elem}
    Namaste React using JSX
  </h1>
);

const num = 1000;

const HeadingComponent = () => {
  return (
    <div className="container">
      <h1>Namaste React Functional Component</h1>
      {title}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
