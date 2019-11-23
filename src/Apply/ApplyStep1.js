import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

class ApplyStep1 extends Component {
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
      setApartmentOption
    } = this.props;

    return this.state.submittedSuccessfully
      ? (<Redirect to="/apply/2" />)
      : (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input type="submit" value="Go to step 2" />
        </fieldset>
      </form>
    )
  }
}

ApplyStep1.propTypes = {
  options: PropTypes.object.isRequired,
  selectedApartmentId: PropTypes.string
};

export default ApplyStep1;
