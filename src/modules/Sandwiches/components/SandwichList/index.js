import { View } from "react-native";

import PropTypes from "prop-types";
import React from "react";
import { pure } from "recompose";
import SandwichCard from "../SandwichCard";
import styles from "./style";

const emptySandwich = {
  id: "0",
  name: "Novo Lanche",
  ingredients: [],
};

const SandwichList = ({ sandwiches, onChooseSandwich }) => (
  <View style={styles.container}>
    {sandwiches.map(sandwich => (
      <SandwichCard
        key={sandwich.id}
        sandwich={sandwich}
        onChooseSandwich={onChooseSandwich}
      />
    ))}
    <SandwichCard
      key={emptySandwich.id}
      sandwich={emptySandwich}
      onChooseSandwich={onChooseSandwich}
    />
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
