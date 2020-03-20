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

// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";

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

// core components
import {
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7
} from "./../variables/charts.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  render() {
    return (
      <>
        <div className="content">

          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Consumption per Month</h5>
                  <CardTitle tag="h3">Electricity</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample7.data}
                      options={chartExample7.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Consumption per Month</h5>
                  <CardTitle tag="h3">Water</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Consumption per Month</h5>
                  <CardTitle tag="h3">Gas</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Consumption</h5>
                  <CardTitle tag="h3">
                    <i className="fa fa-bolt text-warning fa-4x" /> Electricity
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Pie
                      data={chartExample4.data}
                      options={chartExample4.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
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
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Consumption</h5>
                  <CardTitle tag="h3">
                    <i className="fa fa-fire text-danger fa-4x" /> Gas
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Pie
                      data={chartExample6.data}
                      options={chartExample6.options}
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
      </>
    );
  }
}

export default Dashboard;
