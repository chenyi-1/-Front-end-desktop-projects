import { Button, Form } from "antd";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
// import routes from "./routes";
import "./index.css";
import Home from '../../components/Home'

export default class Login extends Component {
  state = {
    InputValue: "",
    password: "",
    showElem: true,
  };

  headleGetInputValue = (event) => {
    this.setState({
      InputValue: event.target.value,
    });
  };

  handPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handlePost = () => {
    const { InputValue, password } = this.state;
    if (InputValue === "name" || password === "123456") {
      console.log("1");
      return;
    } else {
      alert("密码或用户名不正确");
      return;
    }
  };

  render() {
    return (
      <div>
        <div className="name">
          <Form className="forms">
            <input
              type="text"
              value={this.state.InputValue}
              onChange={this.headleGetInputValue}
            />

            <input
              type="password"
              value={this.state.password}
              onChange={this.handPassword}
            />
            <Button onClick={this.handlePost} href="/home">
              登入
            </Button>

          </Form>
         

          {/* <NavLink
            className="buttons"
            onClick={this.handlePost}
            // to={this.state.showElem ? "" : "/home"}
          > */}

          {/* </NavLink> */}
        </div>
      </div>
    );
  }
}
