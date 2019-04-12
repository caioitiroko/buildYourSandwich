import {
  Text,
  View,
} from "react-native";

import PropTypes from "prop-types";
import React from "react";
import SandwichCard from "../SandwichCard";
import { pure } from "recompose";
import styles from "./style";

const SandwichList = ({ sandwiches, onChooseSandwich }) => (
  <View style={styles.container}>
    {sandwiches.map(sandwich => (
      <SandwichCard
        key={sandwich.id}
        sandwich={sandwich}
        onChooseSandwich={onChooseSandwich}
      />
    ))}
  </View>
);

SandwichList.propTypes = {
  sandwiches: PropTypes.arrayOf(PropTypes.object),
  onChooseSandwich: PropTypes.func.isRequired,
};

SandwichList.defaultProps = {
  sandwiches: [],
};

export default pure(SandwichList);
