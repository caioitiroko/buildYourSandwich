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

import ArrowBottom from "../../../../../images/arrow-bottom.png";
import ArrowTop from "../../../../../images/arrow-top.png";
import PropTypes from "prop-types";
import React from "react";
import styles from "./style";

const enhance = compose(
  pure,
  withHandlers({
    onAddIngredient: ({ onAddIngredient, ingredient }) => () => onAddIngredient(ingredient),
    onRemoveIngredient: ({ onRemoveIngredient, ingredient }) => () => onRemoveIngredient(ingredient),
  }),
);

const IngredientCard = ({ ingredient, quantity, onAddIngredient, onRemoveIngredient }) => (
  <View style={styles.container}>
    <View style={styles.ingredientInfo}>
      <Text style={styles.ingredientName}>{ingredient.name}</Text>
      <Text style={styles.ingredientPrice}>{`R$ ${ingredient.price}`}</Text>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  onAddIngredient: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
};

export default enhance(IngredientCard);