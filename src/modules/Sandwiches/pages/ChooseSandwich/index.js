import {
  ImageBackground,
  SafeAreaView,
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

import { Actions } from "react-native-router-flux";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import lifecycle from "react-pure-lifecycle";
import { prop } from "ramda";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

import Divider from "../../../../components/Divider";
import SandwichList from "../../components/SandwichList";
import RedSpinner from "../../../../components/RedSpinner";
import { requestSnacks, setSelectedSandwich } from "../../../../actions";
import { getError, getSnacks, isLoading } from "../../selectors";
import { isNotNil } from "../../../../utils";
import styles from "./style";
import Reloader from "../../../../components/Reloader";
import WoodBackground from "../../../../../images/wood.jpg";

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
  branch(
    ({ error }) => isNotNil(error),
    renderComponent(({ onRequestSnacks }) => <Reloader onReload={onRequestSnacks} />)
  )
);

const ChooseSandwich = ({ onChooseSandwich, sandwiches }) => (
  <ImageBackground source={WoodBackground} style={styles.background}>
    <SafeAreaView />
    <View style={styles.container}>
      <View style={styles.header}>
        <Divider color="#666" style={styles.divider}>
          <FontAwesome5Icon name="hamburger" size={30} color="#666" />
        </Divider>
        <Text style={styles.title}>Escolha seu lanche</Text>
      </View>
      <SandwichList
        sandwiches={sandwiches}
        onChooseSandwich={onChooseSandwich}
        style={styles.sandwichList}
      />
    </View>
    <SafeAreaView />
  </ImageBackground>
);

ChooseSandwich.propTypes = {
  sandwiches: PropTypes.arrayOf(PropTypes.object),
  onChooseSandwich: PropTypes.func.isRequired,
};

ChooseSandwich.defaultProps = {
  sandwiches: [],
};

export default enhance(ChooseSandwich);
