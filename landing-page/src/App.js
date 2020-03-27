import React from "react";
import logo from "./images/logo-black.svg";
import "./App.css";

const scriptURL =
  "https://script.google.com/macros/s/AKfycby03rFxoHR_XJQKeQ5ATjdaHvhs2lEt87YSzOAW4mdh-e6MBy1t/exec";
const theForm = document.forms["submit-to-google-sheet"];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      emailAdd: ""
    };
  }

  returnEmail() {}

  render() {
    return (
      <div className="App">
        <div className="Landingtitle">
          <img alt="" src={logo} height="80" />
          <p>LEGACY</p>
        </div>
        <body id="content">
          <div id="content-top">
            <div>
              <h1>All the Advantages of being a Legacy </h1>
              <p>
                Legacy pairs you with an alumni who will support your education
                and invest in your future
              </p>
              <form name="submit-to-google-sheet">
                {" "}
                <input
                  type="text"
                  id="email-input"
                  style={{
                    height: "60px",
                    width: "30vw",
                    fontSize: "20px",
                    paddingLeft: "20px",
                    marginRight: "10px"
                  }}
                  name="email"
                  placeholder="Enter Your Email"
                />
                <input
                  type="submit"
                  id="email-input"
                  style={{
                    width: "auto",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    height: "60px",
                    fontSize: "20px",
                    backgroundColor: "#FFF7F7"
                  }}
                  value="Get Early Access"
                  onClick={this.returnEmail}
                />
              </form>
            </div>
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
        </body>
        <footer></footer>
      </div>
    );
  }
}

export default App;
