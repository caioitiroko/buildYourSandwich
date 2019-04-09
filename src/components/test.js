import PropTypes from "prop-types";
import React from "react";
import {
  Text,
} from "react-native";
import { connect } from "react-redux";

import { requestIngredients, requestSnacks } from "../actions";

const Test = ({ onRequestIngredients, onRequestSnacks }) => {
  onRequestIngredients();
  onRequestSnacks();

  return (
    <Text> xxxx </Text>
  );
};

Test.propTypes = {
  onRequestIngredients: PropTypes.func.isRequired,
  onRequestSnacks: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onRequestIngredients: () => dispatch(requestIngredients()),
  onRequestSnacks: () => dispatch(requestSnacks()),
});

const enhance = connect(null, mapDispatchToProps);

export default enhance(Test);
