import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { callApi, resetState } from "../actions";
import Form from "./Form";
import Overlay from "./Overlay";

const App = ({ callApi, isLoading, result, resetState }) => {
  return (
    <div className="container">
      {result && <Overlay result={result} onAction={resetState} />}
      <Form isLoading={isLoading} onSubmit={callApi} />
    </div>
  );
};

App.propTypes = {
  callApi: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  result: PropTypes.number,
  resetState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  result: state.result,
});

const mapDispatchToProps = {
  callApi,
  resetState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
