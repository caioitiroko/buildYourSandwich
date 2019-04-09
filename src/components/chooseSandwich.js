import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';

import { requestIngredients, requestSnacks } from "../actions";

const Test = ({ onRequestIngredients, onRequestSnacks }) => {
  onRequestIngredients();
  onRequestSnacks();

  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.chooseIngredients()}
      >
        Scarlet Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

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
