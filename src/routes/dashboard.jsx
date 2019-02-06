import Dashboard from "views/Dashboard/Dashboard.jsx";
import RegularForms from "views/Projects/RegularForms.jsx";
import ExtendedForms from "views/Projects/ExtendedForms.jsx";
import ValidationForms from "views/Projects/ValidationForms.jsx";
import Wizard from "views/Projects/Wizard.jsx";
import Charts from "views/Charts/Charts.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";
import TimelinePage from "views/Pages/Timeline.jsx";
import Boards from "../views/Boards/Boards.jsx"

import pagesRoutes from "./pages.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import Timeline from "@material-ui/icons/Timeline";
import DateRange from "@material-ui/icons/DateRange";
import Assignment from "@material-ui/icons/Assignment"

var pages = [
  {
    path: "/timeline-page",
    name: "Timeline Page",
    mini: "TP",
    component: TimelinePage
  },
  {
    path: "/user-page",
    name: "User Profile",
    mini: "UP",
    component: UserProfile
  },
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    collapse: true,
    path: "-page",
    name: "Users",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: true,
    path: "/projects",
    name: "Projects",
    state: "openForms",
    icon: "content_paste",
    views: [
      {
        path: "/projects/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms
      },
      {
        path: "/projects/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms
      },
      {
        path: "/projects/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms
      },
      { path: "/projects/wizard", name: "Wizard", mini: "W", component: Wizard }
    ]
  },
  { path: "/boards", name: "Boards", icon: Assignment, component: Boards },
  { path: "/charts", name: "Charts", icon: Timeline, component: Charts },
  { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
