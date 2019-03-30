import Dash from "../components/layout/Dash"
import Pages from "../components/layout/Pages";


var indexRoutes = [
  { path: "/", name: "Home", component: Dash },
  { path: "/pages", name: "Pages", component: Pages },
];

export default indexRoutes;
