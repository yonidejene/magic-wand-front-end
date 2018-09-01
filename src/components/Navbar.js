import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

//Navbar component takes in content and renders a navbar on top of it

const Navbar = ({ children }) => (
  <React.Fragment>
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ float: "right", lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/pipeline"> Pipeline </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/portfolio"> Portfolio Success </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/research"> Research </Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content>{children}</Content>
  </React.Fragment>
);

export default Navbar;
