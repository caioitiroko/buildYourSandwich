import {
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  branch,
  compose,
  pure,
  renderComponent,
  withHandlers,
} from "recompose";

import { Actions } from "react-native-router-flux";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import lifecycle from "react-pure-lifecycle";
import { prop } from "ramda";
import SandwichList from "../../components/SandwichList";
import RedSpinner from "../../../../components/RedSpinner";
import { requestSnacks, setSelectedSandwich } from "../../../../actions";
import { getError, getSnacks, isLoading } from "../../selectors";
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
