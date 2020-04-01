import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions/index";

const SurveyList = ({ surveys, fetchSurveys }) => {
  useEffect(() => {
    fetchSurveys();
  }, []);

  const renderSurveys = () => {
    return surveys.reverse().map(survey => {
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content text-white">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  };

  return <div>{renderSurveys()}</div>;
};

const mapStateToProps = state => ({
  surveys: state.surveys
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
