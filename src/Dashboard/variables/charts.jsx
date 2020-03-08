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
// ##############################
// // // Chart variables
// #############################

// chartExample1 and chartExample2 options
let chart1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample1 = {
  data1: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(106,53,156,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(106,53,156,0.0)");
    gradientStroke.addColorStop(0, "rgba(106,53,156,0)"); //purple colors

    return {
      labels: [
        "JAN 1",
        "JAN 2",
        "JAN 3",
        "JAN 4",
        "JAN 5",
        "JAN 6",
        "JAN 7",
        "JAN 8",
        "JAN 9",
        "JAN 10",
        "JAN 11",
        "JAN 12",
        "JAN 13",
        "JAN 14",
        "JAN 15",
        "JAN 16",
        "JAN 17",
        "JAN 18",
        "JAN 19",
        "JAN 20"
      ],
      datasets: [
        {
          label: "Electricity Consumption (Wh)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#d048b6",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#d048b6",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            5263,
            5828,
            5967,
            5890,
            5779,
            5472,
            5809,
            5821,
            5783,
            5751,
            5805,
            5326,
            5203,
            5999,
            5997,
            5885,
            5870,
            5627,
            5139,
            5056
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },

  data2: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(106,53,156,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(106,53,156,0.0)");
    gradientStroke.addColorStop(0, "rgba(106,53,156,0)"); //purple colors

    return {
      labels: [
        "1",
        "2",
        "3",
        "3",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20"
      ],
      datasets: [
        {
          label: "Electricity Consumption (Wh)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#d048b6",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#d048b6",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            39767,
            39720,
            38646,
            38416,
            40157,
            40114,
            40213,
            38437,
            38831,
            37393,
            37255,
            36870,
            37468,
            37356,
            38137,
            39155,
            38783,
            39025,
            38902,
            37010
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },

  data3: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(106,53,156,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(106,53,156,0.0)");
    gradientStroke.addColorStop(0, "rgba(106,53,156,0)"); //purple colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Electricity Consumption (Wh)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#d048b6",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#d048b6",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            174260,
            159179,
            165976,
            163624,
            169300,
            208422,
            236881,
            225792,
            205280,
            177294,
            167755,
            180175
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },
  options: chart1
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################

let chartExample2 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 101, 60, 25, 65]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
const chartExample3 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [90, 27, 60, 12, 80]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(0,242,195,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample4 = {
  data: {
    labels: [
      "Refrigration",
      "Lighting",
      "Air Condition",
      "Water Heating",
      "Ventilation"
    ],
    datasets: [
      {
        label: "Data",
        fill: true,
        borderWidth: 0,
        backgroundColor: [
          "#552586",
          "#6A359C",
          "#804FB3",
          "#9969C7",
          "#B589D6"
        ],
        hoverBackgroundColor: [
          "#552586",
          "#6A359C",
          "#804FB3",
          "#9969C7",
          "#B589D6"
        ],
        data: [12, 47, 22, 15, 4]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample5 = {
  data: {
    labels: ["Washing Machine", "Gardening", "Toilet", "Shower", "Faucet"],
    datasets: [
      {
        label: "Data",
        fill: true,
        borderWidth: 0,
        backgroundColor: [
          "#1a84b8",
          "#1a8cb8",
          "#1a94b8",
          "#1a9cb8",
          "#1aa4b8"
        ],
        hoverBackgroundColor: [
          "#1a84b8",
          "#1a8cb8",
          "#1a94b8",
          "#1a9cb8",
          "#1aa4b8"
        ],
        data: [17, 21, 24, 20, 18]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
const chartExample6 = {
  data: {
    labels: ["Cooking", "Space Heating", "Water Heating"],
    datasets: [
      {
        label: "Data",
        fill: true,
        borderWidth: 0,
        backgroundColor: ["#00AB08", "#26D701", "#95F985"],
        hoverBackgroundColor: ["#00AB08", "#26D701", "#95F985"],
        data: [31, 49, 20]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  }
};

module.exports = {
  chartExample1, // in src/views/Dashboard.jsx
  chartExample2, // in src/views/Dashboard.jsx
  chartExample3, // in src/views/Dashboard.jsx
  chartExample4, // in src/views/Dashboard.jsx
  chartExample5,
  chartExample6
};
