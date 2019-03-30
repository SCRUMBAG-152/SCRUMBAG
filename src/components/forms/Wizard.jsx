import React from "react";

// core components
import Wizard from "../../customs/components/Wizard/Wizard.jsx";
import GridContainer from "../../customs/components/Grid/GridContainer.jsx";
import GridItem from "../../customs/components/Grid/GridItem.jsx";

import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";

class WizardView extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              { stepName: "About", stepComponent: Step1, stepId: "about" },
              { stepName: "Account", stepComponent: Step2, stepId: "account" },
              { stepName: "Address", stepComponent: Step3, stepId: "address" }
            ]}
            title="Build Your Profile"
            subtitle="This information will let us know more about you."
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;
