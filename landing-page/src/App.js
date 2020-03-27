import React from "react";
import logo from "./images/logo-black.svg";
import pushToAirtable from './pushToAirtable';
import "./App.css";

function sendFeedback(props) {
  const { email } = props;

  return pushToAirtable({ email });
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      loading: false
    };
  }

  onChange = e => {
    this.setState({ email: e.target.value });
  };

  onSubmit = e => {
    const { email } = this.state;
    e.preventDefault();
    this.setState({ loading: true }, () => {
      sendFeedback({
        email
      })
    });
    this.setState({
      email: '',
      loading: false
    });
  };


  render() {
    const { email } = this.state;
    return (
      <div className="App">
        <div className="Landingtitle">
          <img alt="" src={logo} height="80" />
          <p>LEGACY</p>
        </div>
        <body id="content">
          <div id="content-top">
            <h1>All the Advantages of being a Legacy </h1>
            <p>
              Legacy pairs you with an alumni in your industry who will help finance your education
              and mentor your future through an Income Share Agreement
            </p>
            <form onSubmit={this.onSubmit} >
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
                value={email}
                onChange={this.onChange}
              />
              <button
                type="submit"
                id="email-input"
                disabled={this.state.loading}
                style={{
                  width: "auto",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  height: "60px",
                  fontSize: "20px",
                  backgroundColor: "#FFF7F7"
                }}>
              {this.state.loading ? 'Sending...' : 'Get Early Access'}
              </button>
            </form>
          </div>
          <div id="what-is">
              <h2>Hello! We’re Legacy.</h2>
              <p>We’re a couple of international first-gen Berkeley students who know how scary it is to think about tuition and college</p>
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
