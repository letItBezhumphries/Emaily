import React, { Fragment, Component, useEffect } from "react";
// import { Provider } from "react-redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
// import Routes from "./routing/Routes";
// import store from "../store";
import * as actions from "../actions";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";

// const App = () => {
//   useEffect(() => {
//     store.dispatch(fetchUser());
//   });

//   return (
//     <Provider store={store}>
//       <Router>
//         <Fragment>
//           <Navbar />
//           <Switch>
//             <Route exact path="/" component={Landing} />
//             <Route component={Routes} />
//           </Switch>
//         </Fragment>
//       </Router>
//     </Provider>
//   );
// };

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/survey/new" component={SurveyNew} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
