import React from "react";
import Navbar from "../components/Navbar";
import CompanyDetails from "../components/Company/DetailedView/index.js";

class Company extends React.Component {
  render() {
    return (
      <Navbar>
        <CompanyDetails match={this.props.match} />
      </Navbar>
    );
  }
}

export default Company;
