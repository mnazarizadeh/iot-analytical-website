import React, { Component } from "react";
import "./../assets/css/login.css";
import { getValueFromEvent } from "../util/clientUtils";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iUsername: "",
      Password: "",
    };
  }

  componentDidMount() {
      this.props.hideLoader();
  }

  CheckLogin = () => {
    if (this.state.iUsername === "") {
      document.getElementById("user-validation").textContent =
        "Please enter your username!";
    } else {
      document.getElementById("user-validation").textContent = "";
    }
    if (this.state.Password === "") {
      document.getElementById("password-validation").textContent =
        "Please enter your password!";
    } else {
      document.getElementById("password-validation").textContent = "";
    }
    if (
      this.state.iUsername.toLowerCase() === "guest" &&
      this.state.Password === "guest"
    ) {
      this.props.history.push(`/Dashboard`);
    }
    if (this.state.iUsername !== "" && this.state.Password !== "") {
      document.getElementById(
        "error"
      ).innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
       Your username or password is incorrect, please try again.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`;
    }
  };

  onInputChangedUsername = (e) => {
    const newValues = getValueFromEvent(e);
    this.setState({
      iUsername: newValues.Username,
    });
  };

  onInputChangedPassword = (e) => {
    const newValues = getValueFromEvent(e);

    this.setState({
      Password: newValues.Password,
    });
  };

  render() {
    let date = new Date();
    let year = date.getFullYear();
    document.addEventListener('keydown', event => {
      if (event.key === "Enter") {
        document.getElementsByClassName("btn")[0].click();
      }
    });

    return (
      <React.Fragment>
        <div className="text-center login">
          <div className="form-signin2">
            <a href="/">
              <img
                id="logo-img"
                className="mb-4"
                src="./assets/img/logo.png"
                alt="logo"
              />
            </a>

            <div id="error"/>

            <input
              type="text"
              className="form-control top-input"
              name="Username"
              placeholder="Username"
              onChange={(e) => this.onInputChangedUsername(e)}
              required
              autoFocus
            />
            <input
              name="Password"
              placeholder="Password"
              type="password"
              onChange={(e) => this.onInputChangedPassword(e)}
              className="form-control bottom-input"
              required
            />
            <div id="user-validation"/>
            <div id="password-validation"/>

            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              onClick={() => this.CheckLogin()}
            >
              Log in
            </button>
            <p className="mt-5 mb-3 text-muted">
              &copy; {year} IoT Analytical{" "}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
