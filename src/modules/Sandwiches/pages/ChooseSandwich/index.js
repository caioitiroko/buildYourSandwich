import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  branch,
  compose,
  pure,
  renderComponent,
  withHandlers,
} from "recompose";
import { getError, getSnacks, isLoading } from "../../selectors";
import { requestSnacks, setSelectedSandwich } from "../../../../actions";

import { Actions } from "react-native-router-flux";
import PropTypes from "prop-types";
import React from "react";
import RedSpinner from "../../../../components/RedSpinner";
import SandwichList from "../../components/SandwichList";
import { connect } from "react-redux";
import lifecycle from "react-pure-lifecycle";
import { prop } from "ramda";
import styles from "./style";

const enhance = compose(
  pure,
  connect(
    state => ({
      sandwiches: getSnacks(state),
      isLoading: isLoading(state),
      error: getError(state),
    }),
    dispatch => ({
      onRequestSnacks: () => dispatch(requestSnacks()),
      onSetSelectedSandwich: sandwich => dispatch(setSelectedSandwich(sandwich)),
    })
  ),
  withHandlers({
    onChooseSandwich: ({ onSetSelectedSandwich }) => (sandwich) => {
      onSetSelectedSandwich(sandwich);
      Actions.chooseIngredients();
    },
  }),
  lifecycle({
    componentDidMount: ({ onRequestSnacks }) => onRequestSnacks(),
  }),
  branch(
    prop("isLoading"),
    renderComponent(() => <RedSpinner />)
  ),
);

const ChooseSandwich = ({ onChooseSandwich, sandwiches }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Escolha seu lanche</Text>
    </View>
    <ScrollView>
      <SandwichList sandwiches={sandwiches} onChooseSandwich={onChooseSandwich} />
    </ScrollView>
  </SafeAreaView>
);

ChooseSandwich.propTypes = {
  sandwiches: PropTypes.arrayOf(PropTypes.object),
  onChooseSandwich: PropTypes.func.isRequired,
};

ChooseSandwich.defaultProps = {
  sandwiches: [],
};

export default enhance(ChooseSandwich);
