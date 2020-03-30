import React, { Component } from "react";
// reduxForm similar to the connect method and communicates with reduxForm store
import { reduxForm } from "redux-form";

class SurveyForm extends Component {
  render() {
    return <div>SurveyForm!</div>;
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
