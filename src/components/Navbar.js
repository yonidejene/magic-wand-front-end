import React from "react";
import { Layout, Menu as AntMenu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoPath from "../assets/LongLogo_Black.png";

const { Header: AntHeader, Content } = Layout;

//Navbar component takes in content and renders a navbar on top of it

const Header = styled(AntHeader)`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-items: center;
  margin-bottom: 25px;
`;

const Menu = styled(AntMenu)`
  margin: 25px;
  line-height: 30px;
  border-bottom: none;
  font-size: 16px;
  font-weight: 500;
`;

const Logo = styled.img`
  margin-left: 15px;
  justify-self: start;
  max-width: 250px;
`;

const Navbar = ({ children }) => (
  <div>
    <Header style={{ background: "white" }}>
      <Logo src={LogoPath} />
      <Menu mode="horizontal" style={{}}>
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
  </div>
);

export default Navbar;
