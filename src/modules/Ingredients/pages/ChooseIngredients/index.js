import {
  Text,
  View,
} from "react-native";
import { Actions } from 'react-native-router-flux';
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { requestIngredients, requestSnacks } from "../../../../actions";
import styles from "./style";

const Test = ({ onRequestIngredients, onRequestSnacks }) => {
  onRequestIngredients();
  onRequestSnacks();

  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.chooseSandwich()}
      >
        Scarlet Screen
      </Text>
    </View>
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
