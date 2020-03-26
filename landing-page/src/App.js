import React from "react";
import "./App.css";

const navbar = (
  <div>
    <h1>Hello</h1>
    <p>this is where the navbar is going to be</p>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navigation">{navbar}</div>
        <div id="content-top">
          <div>
            <h1>Hi this is legacy</h1>
            <p>Welcome and join us</p>
            <button>Waitlist Now!</button>
          </div>
          <div id="image"></div>
        </div>
        <div id="as-seen">
          <h2>IN PARTNERSHIP WITH</h2>
          <div id="logos">
            <img src={require("./images/Big-Ideas-logo.png")} />
            <img src={require("./images/berk-law.jpg")} />
          </div>
        </div>
        <div id="students"></div>
        <div id="investors"></div>
      </div>
    );
  }
}

export default App;
