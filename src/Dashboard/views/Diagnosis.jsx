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

import Sidebar from "./../components/Sidebar/Sidebar";
import routes from "./../routes.js";
import { Route, Switch } from "react-router-dom";
import Footer from "./../components/Footer/Footer.js";
import AdminNavbar from "./../components/Navbars/AdminNavbar";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";



class Diagnosis extends React.Component {
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

export default Diagnosis;