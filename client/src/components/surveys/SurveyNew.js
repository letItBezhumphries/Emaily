import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = {
    showReview: false
  };

  renderContent() {
    if (this.state.showReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showReview: false })}
        />
      );
    }
    return (
      <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  }

  render() {
    return (
      <div>
        SurveyNew!
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;
