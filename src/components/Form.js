import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: "",
  };

  changeHandler = e => {
    if (/^[\w]{0,10}$/.test(e.target.value)) {
      this.setState({ inputValue: e.target.value });
    }
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    const { inputValue } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="box">
        <form onSubmit={this.submitHandler}>
          <input type="text" value={inputValue} onChange={this.changeHandler} />
          <button type="submit" disabled={!inputValue || isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    );
  }
}
