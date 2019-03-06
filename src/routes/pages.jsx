// import PricingPage from "views/Pages/PricingPage.jsx";
import LoginPage from "views/Pages/LoginPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";
// import LockScreenPage from "views/Pages/LockScreenPage.jsx";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";
import CompanyRegisterPage from "../views/Pages/CompanyRegisterPage";
// import MonetizationOn from "@material-ui/icons/MonetizationOn";
// import LockOpen from "@material-ui/icons/LockOpen";

const pagesRoutes = [
  {
    path: "/pages/register-page",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: RegisterPage
  },
  {
    path: "/pages/company-register-page",
    name: "Company Register Page",
    short: "Company",
    mini: "CP",
    icon: PersonAdd,
    component: CompanyRegisterPage
  },
  {
    path: "/pages/login-page",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  },
  /*{
    path: "/pages/pricing-page",
    name: "Pricing Page",
    short: "Pricing",
    mini: "PP",
    icon: MonetizationOn,
    component: PricingPage
  },
  {
    path: "/pages/lock-screen-page",
    name: "Lock Screen Page",
    short: "Lock",
    mini: "LSP",
    icon: LockOpen,
    component: LockScreenPage
  },*/
  {
    redirect: true,
    path: "/pages",
    pathTo: "/pages/register-page",
    name: "Register Page"
  }
];

export default pagesRoutes;
