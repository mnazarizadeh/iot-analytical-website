import React, { Component } from "react";
import "./../assets/css/login.css";
import SweetAlert from "sweetalert2-react";
import { getValueFromEvent } from "../util/clientUtils";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,  
      iUsername: "",
      Password: "",
    };
  }

  CheckLogin = () => {
    if (
      this.state.iUsername.toLowerCase() === "guest" &&
      this.state.Password === "guest"
    ) {
      this.props.history.push(`/Dashboard`);
    } else {
      this.setState((prevState) => ({
        show: !prevState.show,
      }));
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
  
    return (
      <React.Fragment>
        <SweetAlert
          icon="warning"
          show={this.state.show}
          title="Log in Failed"
          text="Your username or password is incorrect, Please Try Again!"
          onConfirm={() => this.setState({ show: false })}
        />

        <div className="text-center login">
          <div className="form-signin2">
            <img className="mb-5" src="./assets/img/loginLogo.png" alt="logo" />

            <input
              type="text"
              className="form-control top-input"
              name="Username"
              placeholder="username"
              onChange={(e) => this.onInputChangedUsername(e)}
              required
              autofocus
            />

            <input
              name="Password"
              placeholder="Password"
              type="password"
              onChange={(e) => this.onInputChangedPassword(e)}
              className="form-control bottom-input"
              required
            />

            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={() => this.CheckLogin()}
            >
              Log in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; IoT Analytical {year}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
