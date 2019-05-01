import { ScrollView, View, ViewPropTypes } from "react-native";

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

const SandwichList = ({ sandwiches, style, onChooseSandwich }) => (
  <ScrollView style={[styles.container, style]}>
    <View style={styles.content}>
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
  </ScrollView>
);

SandwichList.propTypes = {
  sandwiches: PropTypes.arrayOf(PropTypes.object),
  style: ViewPropTypes.style,
  onChooseSandwich: PropTypes.func.isRequired,
};

SandwichList.defaultProps = {
  sandwiches: [],
  style: {},
};

export default pure(SandwichList);
