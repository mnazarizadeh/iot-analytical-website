import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";
import PropTypes from "prop-types";
// import PageTitle from "./PageTitle";

class DashBoard extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {/* <MainSidebar /> */}
          <Col
            className="main-content p-0"
            lg={{ size: 10, offset: 2 }}
            md={{ size: 9, offset: 3 }}
            sm="12"
            tag="main"
          >
            <h1>thi is test</h1>
            {/* {!noNavbar && <MainNavbar />}
            {children}
            {!noFooter && <MainFooter />} */}
          </Col>
        </Row>
      </Container>
    );
  }
}

DashBoard.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DashBoard.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DashBoard;
