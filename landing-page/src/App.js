import React from "react";
import logo from "./images/logo-black.svg";
import star from "./images/star-of-life.svg";
import person from "./images/person.svg";
import money from "./images/money.svg";
import circle from "./images/circle-notch.svg";
import pushToAirtable from './pushToAirtable';
import "./App.css";

function sendFeedback(props) {
  const { email } = props;
  return pushToAirtable({ email });
}

function Subsection(props) {
  return (
    <div className="side-by-side">
      <div id="sub-logo" >
      <img alt="" src={props.img} height="30" />
      </div>
      <div>
        <h1 class="medium">{props.title}</h1>
        <p class="book">{props.body}</p>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      loading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
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
          <p class="medium">LEGACY</p>
        </div>
        <body id="content">
          <div id="content-top">
            <h1 class="medium">All the Advantages of being a Legacy </h1>
            <p class="book">
              Legacy pairs you with an alumni in your industry who will help finance your education
              and mentor your future through an Income Share Agreement
            </p>
            <form onSubmit={this.onSubmit} >
              {" "}
              <div id="submission">
                <input
                  type="email"
                  id="email-input"
                  className="book"
                  style={{
                    width: "30vw"
                  }}
                  name="email"
                  placeholder="Enter Your Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <button
                  type="submit"
                  id="email-input"
                  className="medium"
                  disabled={this.state.loading}
                  style={{
                    color: 'white',
                    backgroundColor: "#E0385A",
                    outline: "none"
                  }}>
                {this.state.loading ? 'Sending...' : 'GET EARLY ACCESS'}
                </button>
              </div>
            </form>
          </div>
          <div id="intro">
            <div id="what-is">
                <h2 class="semibold">Hello! We’re Legacy.</h2>
                <p class="medium">We’re a couple of international first-gen Berkeley students who know how scary it is to think about tuition and college.</p>
            </div>
            <div id="info" >
              <Subsection img={star} title="This isn’t some evil predatory loan" body="We don’t need your credit score, 
              and we won’t charge you interest; we just want to see your merits as they’re presented; today"/>
              <Subsection img={person} title="One to one mentorship, just for you" body="We’ll find you a dedicated Berkeley 
              alum working in your future dream industry to show you the ropes "/>
              <Subsection img={money} title="We make money when you do" body="Our repayment method is based off your future earnings, 
              so you can count on us to be in your corner helping you succeed"/>
              <Subsection img={circle} title="No commitments from day one" body="We just want to talk! This is an entirely new project 
              and we want to make this experience as valuable as we can. Even if you don’t think this was meant for you, 
              sign up so we can have a chat!"/>
            </div>
          </div>
          <div id="as-seen">
            <h2 class="medium">IN PARTNERSHIPS WITH</h2>
            <div id="logos">
              <img src={require("./images/Big-Ideas-logo.png")} />
              <img src={require("./images/berk-law.jpg")} />
            </div>
          </div>
          <div id="students"></div>
          <div id="investors"></div>
        </body>
        <footer> 
          <div id="foot">
            <p class="reg">Copyright © 2020 Legacy All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
