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
import Dashboard from "./views/Dashboard.jsx";
import Electricity from "./views/Electricity.jsx";
import Water from "./views/Water.jsx";
import Gas from "./views/Gas.jsx";
import Diagnosis from "./views/Diagnosis.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: ""
  },
  {
    path: "/Electricity",
    name: "Electricity",
    rtlName: "الرموز",
    icon: "fa fa-bolt fa-4x",
    component: Electricity,
    layout: ""
  },
  {
    path: "/Water",
    name: "Water",
    rtlName: "خرائط",
    icon: "fa fa-tint fa-4x",
    component: Water,
    layout: ""
  },
  {
    path: "/Gas",
    name: "Gas",
    rtlName: "إخطارات",
    icon: "fa fa-fire fa-4x",
    component: Gas,
    layout: ""
  },
  {
    path: "/Diagnosis",
    name: "Diagnosis",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "fa fa-tachometer fa-4x",
    component: Diagnosis,
    layout: ""
  },
  {
    path: "/Settings",
    name: "Settings",
    rtlName: "قائمة الجدول",
    icon: "fa fa-cog fa-4x",
    component: Dashboard,
    layout: ""
  }
];
export default routes;
