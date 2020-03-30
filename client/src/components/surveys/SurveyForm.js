import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// reduxForm similar to the connect method and communicates with reduxForm store
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    noValueError: "Provide a Survey Title"
  },
  {
    label: "Subject Line",
    name: "subject",
    noValueError: "Provide a Subject Line"
  },
  { label: "Email Body", name: "body", noValueError: "Provide an Email Body" },
  { label: "Recipient List", name: "emails", noValueError: "Provide an Email" }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type="text"
          component={SurveyField}
        />
      );
    });
  }

  render() {
    return (
      <div>
        SurveyForm!
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>

          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

// takes a values object of the submitted values when user submits the form?

const validate = values => {
  const errors = {};
  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
