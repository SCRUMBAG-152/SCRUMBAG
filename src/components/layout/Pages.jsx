import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import PagesHeader from "./PagesHeader.jsx";
import Footer from "../../customs/components/Footer/Footer.jsx";

import pagesRoutes from "../../routes/pages.jsx";

import pagesStyle from "../../customs/assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";

import bgImage from "../../customs/assets/img/register.jpeg";

class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <PagesHeader {...rest} />
        <div className={classes.wrapper} ref="wrapper">
          <div
            className={classes.fullPage}
            style={{ backgroundImage: "url(" + bgImage + ")" }}
          >
            <Switch>
              {pagesRoutes.map((prop, key) => {
                if (prop.collapse) {
                  return null;
                }
                /* if (prop.redirect) {
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                } */
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
            <Footer white />
          </div>
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(Pages);
