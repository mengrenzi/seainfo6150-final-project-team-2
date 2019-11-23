import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

class ApplyStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedSuccessfully: false
    }
  }

  handleSubmit() {
    this.setState({
      submittedSuccessfully: true
    });
  }

  render() {
    const {
      options,
      selectedApartmentId,
      setUserInfo
    } = this.props;

    return this.state.submittedSuccessfully
      ? (<Redirect to="/apply/summary" />)
      : (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input type="submit" value="Go to summary" />
        </fieldset>
      </form>
    )
  }
}

ApplyStep2.propTypes = {
  options: PropTypes.object.isRequired,
  selectedApartmentId: PropTypes.string
};

export default ApplyStep2;
