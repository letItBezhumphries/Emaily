import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = props => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/survey/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
