import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  compose,
  pure,
  withHandlers,
} from "recompose";

import PropTypes from "prop-types";
import React from "react";
import ArrowBottom from "../../../../../images/arrow-bottom.png";
import ArrowTop from "../../../../../images/arrow-top.png";
import styles from "./style";

const enhance = compose(
  pure,
  withHandlers({
    onAddIngredient: ({ onAddIngredient, ingredient }) => () => onAddIngredient(ingredient),
    onRemoveIngredient:
      ({ onRemoveIngredient, ingredient }) => () => onRemoveIngredient(ingredient),
  }),
);

const IngredientCard = ({
  ingredient, quantity, onAddIngredient, onRemoveIngredient,
}) => (
  <View style={styles.container}>
    <View style={styles.ingredientInfo}>
      <Text style={styles.ingredientName}>{ingredient.name}</Text>
      <Text style={styles.ingredientPrice}>{`R$ ${ingredient.price.toFixed(2)}`}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onAddIngredient} activeOpacity={0.8}>
        <Image source={ArrowTop} />
      </TouchableOpacity>
      <Text style={styles.ingredientQuantity}>{quantity}</Text>
      <TouchableOpacity onPress={onRemoveIngredient} activeOpacity={0.8}>
        <Image source={ArrowBottom} />
      </TouchableOpacity>
    </View>
  </View>
);

IngredientCard.propTypes = {
  ingredient: PropTypes.shape({
    commonIdentifier: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  quantity: PropTypes.number,
  onAddIngredient: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
};

IngredientCard.defaultProps = {
  quantity: 0,
};

export default enhance(IngredientCard);
