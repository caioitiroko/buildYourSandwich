import {
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  compose,
  pure,
  withHandlers,
} from "recompose";

import PropTypes from "prop-types";
import React from "react";
import styles from "./style";

const enhance = compose(
  pure,
  withHandlers({
    onChooseSandwich: ({ onChooseSandwich, sandwich }) => () => onChooseSandwich(sandwich),
  }),
);

const SandwichCard = ({ onChooseSandwich, sandwich }) => (
  <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={onChooseSandwich}>
    <Text style={styles.sandwichName}>{sandwich.name}</Text>
  </TouchableOpacity>
);

SandwichCard.propTypes = {
  sandwich: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
  }).isRequired,
  onChooseSandwich: PropTypes.func.isRequired,
};

export default enhance(SandwichCard);
