import React from "react";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";
const App = ({ loading }) => {
  return <div>{loading ? <Dashboard /> : null}</div>;
};

const MapStateToProps = ({ authUser }) => ({
  loading: authUser !== null,
});

export default connect(MapStateToProps)(App);
