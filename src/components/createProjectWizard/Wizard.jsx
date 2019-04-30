import React from "react";

// core components
import Wizard from "./WizardContainer";
import GridContainer from "../../customs/components/Grid/GridContainer.jsx";
import GridItem from "../../customs/components/Grid/GridItem.jsx";

import Step1 from "./WizardSteps/Step1";
import Step2 from "./WizardSteps/Step2";
import Step3 from "./WizardSteps/Step3";

class WizardView extends React.Component {

  handleCLick = (state) => {
  }
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              { stepName: "About", stepComponent: Step1, stepId: "about" },
              { stepName: "Type", stepComponent: Step2, stepId: "type" },
              { stepName: "Finish", stepComponent: Step3, stepId: "finish" },
            ]}
            title="New Project"
            subtitle="what is your next great project?"
            finishButtonClick={this.handleClick}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;
