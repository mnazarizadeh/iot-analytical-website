/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import Sidebar from "./../components/Sidebar/Sidebar";
import routes from "./../routes.js";
import { Route, Switch } from "react-router-dom";
import Footer from "./../components/Footer/Footer.js";
import AdminNavbar from "./../components/Navbars/AdminNavbar";

import { Line, Pie } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartExample8,
  chartExample5

} from "./../variables/charts.jsx";

class Water extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "IOT ANALYTICAL";
  };
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };

  render() {
    return (

      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor={this.state.backgroundColor}
          logo={{
            text: (
              <img
                src={require("./../assets/img/ia_text_dark.png")}
                alt="logo"
              />
            )
          }}
          toggleSidebar={this.toggleSidebar}
        />
        <div
          className="main-panel"
          ref="mainPanel"
          data={this.state.backgroundColor}
        >
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
            toggleSidebar={this.toggleSidebar}
            sidebarOpened={this.state.sidebarOpened}
          />
          <div className="content">
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">Consumption in 2019</h5>
                        <CardTitle tag="h2">Water</CardTitle>
                      </Col>
                      <Col sm="6">
                        <ButtonGroup
                          className="btn-group-toggle float-right"
                          data-toggle="buttons"
                        >
                          <Button
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "data1"
                            })}
                            color="info"
                            id="0"
                            size="sm"
                            onClick={() => this.setBgChartData("data1")}
                          >
                            <input
                              defaultChecked
                              className="d-none"
                              name="options"
                              type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              Daily
                          </span>
                            <span className="d-block d-sm-none">D</span>
                          </Button>
                          <Button
                            color="info"
                            id="1"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "data2"
                            })}
                            onClick={() => this.setBgChartData("data2")}
                          >
                            <input
                              className="d-none"
                              name="options"
                              type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              Weekly
                          </span>
                            <span className="d-block d-sm-none">W</span>
                          </Button>
                          <Button
                            color="info"
                            id="2"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "data3"
                            })}
                            onClick={() => this.setBgChartData("data3")}
                          >
                            <input
                              className="d-none"
                              name="options"
                              type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              Monthly
                          </span>
                            <span className="d-block d-sm-none">M</span>
                          </Button>
                        </ButtonGroup>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Line
                        data={chartExample8[this.state.bigChartData]}
                        options={chartExample8.options}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <Card className="card-chart">
                  <CardHeader>
                    <h5 className="card-category">Consumption</h5>
                    <CardTitle tag="h3">
                      <i className="fa fa-tint text-primary fa-4x" /> Water
                  </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Pie
                        data={chartExample5.data}
                        options={chartExample5.options}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4"><b>Logs</b></CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Node</th>
                          <th className="text-center">Message Types</th>
                          <th className="text-center">Description</th>
                          <th className="text-center">Zone</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Lighting</td>
                          <td className="text-center"><h4><span class="badge badge-pill badge-danger">Error</span></h4></td>
                          <td className="text-center">Crash</td>
                          <td className="text-center">Dining room</td>
                        </tr>
                        <tr>
                          <td>Wall Mount Lighting</td>
                          <td className="text-center"><h4><span class="badge badge-pill badge-warning">Warning</span></h4></td>
                          <td className="text-center">Warn</td>
                          <td className="text-center">Hall</td>
                        </tr>
                        <tr>
                          <td>AC</td>
                          <td className="text-center"><h4><span class="badge badge-pill badge-info">Info</span></h4></td>
                          <td className="text-center">Replacement needed</td>
                          <td className="text-center">TV Room</td>
                        </tr>
                        <tr>
                          <td>Smart Plug</td>
                          <td className="text-center"><h4><span class="badge badge-pill badge-danger">Error</span></h4></td>
                          <td className="text-center">Disconnect</td>
                          <td className="text-center">Libary</td>
                        </tr>
                        <tr>
                          <td>Curtain</td>
                          <td className="text-center"><h4><span class="badge badge-pill badge-info">Info</span></h4></td>
                          <td className="text-center">Connect</td>
                          <td className="text-center">Libary</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <Switch>{this.getRoutes(routes)}</Switch>
          {// we don't want the Footer to be rendered on map page
            this.props.location.pathname.indexOf("maps") !== -1 ? null : (
              <Footer fluid />
            )}
        </div>
      </div>
    );
  }
}

export default Water;
