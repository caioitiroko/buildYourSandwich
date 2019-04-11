import {
  Text,
  View,
} from "react-native";
import PropTypes from "prop-types";
import React from "react";
import { pure } from "recompose";

import SandwichCard from "../SandwichCard";
import styles from "./style";

const SandwichList = ({ sandwiches, onChooseSandwich }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Escolha seu lanche</Text>
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
