import {
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
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
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
      <View style={styles.ingredientPriceContainer}>
        <MaterialCommunityIcon name="cash" size={26} color="#FFF" style={styles.ingredientPriceIcon} />
        <Text style={styles.ingredientPrice}>{`R$ ${ingredient.price.toFixed(2)}`}</Text>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onAddIngredient} activeOpacity={0.8}>
        <FontAwesomeIcon name="plus-circle" size={26} color="#FFF" />
      </TouchableOpacity>
      <Text style={styles.ingredientQuantity}>{quantity}</Text>
      <TouchableOpacity onPress={onRemoveIngredient} activeOpacity={0.8}>
        <FontAwesomeIcon name="minus-circle" size={26} color="#FFF" />
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
