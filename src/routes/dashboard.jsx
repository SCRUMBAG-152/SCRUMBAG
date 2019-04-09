import Dashboard from "../components/dashboard/Dashboard";
import ReactTables from "../components/widgets/Members";
import Calendar from "../components/widgets/Calendar.js";
import UserProfile from "../components/users/UserProfile.jsx";
import Stats from "../components/widgets/Stats"
import ProjectsPage from "../components/projects/ProjectsPage"

// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ChatIcon from "@material-ui/icons/Chat";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";



const dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    mini: "PD",
    component: Dashboard
  },
  {
    path: "/userprofile",
    name: "User Profile",
    mini: "UP",
    icon: PersonIcon,
    component: UserProfile
  },
  {
    path: "/tables/react-tables",
    name: "Members",
    mini: "GP",
    icon: GroupIcon,
    component: ReactTables
  },
  { 
    path: "/projects", 
    name: "Projects", 
    mini: "P", 
    icon: WorkIcon, 
    component: ProjectsPage 
  },
  { path: "/calendar", 
    name: "Calendar", 
    mini: "CA", 
    icon: DateRange, 
    component: Calendar 
  },
  { path: "/stats", 
    name: "Stats", 
    mini: "S", 
    icon: EqualizerIcon, 
    component: Stats 
  },
  { path: "/chat", 
    name: "Chat", 
    mini: "C", 
    icon: ChatIcon, 
    component: Calendar 
  },
  
  /* { redirect: true, 
    path: "/", 
    pathTo: "/dashboard", 
    name: "Dashboard" 
  }    */
];
export default dashRoutes;
