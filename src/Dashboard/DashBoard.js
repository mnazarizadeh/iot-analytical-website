import React from "react";
import { Container, Row, Col } from "shards-react";
import PropTypes from "prop-types";

import MainNavbar from './MainNavbar/MainNavbar';
import MainSidebar from './MainSidebar/MainSidebar';
import MainFooter from './Footer/MainFooter';
import BlogOverview from './BlogOverview/BlogOverview';

import "./styles/shards-dashboards.1.1.0.css";

const DefaultLayout = () => (
  <Container fluid>
    <Row>
      <MainSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10 }}
        md={{ size: 9 }}
        sm="12"
        tag="main"
      >
        <MainNavbar />

        <BlogOverview />
        <MainFooter />
        {/* {!noNavbar && <MainNavbar />}
        {children}
        {!noFooter && <MainFooter />} */}
      </Col>
    </Row>
  </Container>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
