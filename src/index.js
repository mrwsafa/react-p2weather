import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render(){
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <div> Hi there!</div>;
};
};



ReactDOM.render(
  <App />,

  document.getElementById("root")
);
