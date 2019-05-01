import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  compose,
  pure,
  withHandlers,
  withState,
} from "recompose";
import PropTypes from "prop-types";
import React from "react";
import Ionicon from "react-native-vector-icons/Ionicons";

import { isEmpty } from "ramda";

import styles from "./style";

const enhance = compose(
  pure,
  withHandlers({
    onChooseSandwich: ({ onChooseSandwich, sandwich }) => () => onChooseSandwich(sandwich),
  }),
  withState("showIngredients", "setShowIngredients", false),
  withHandlers({
    onToggleShow:
      ({ showIngredients, setShowIngredients }) => () => setShowIngredients(!showIngredients),
  })
);

const SandwichCard = ({
  onChooseSandwich, onToggleShow, sandwich, showIngredients,
}) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onChooseSandwich}>
    <View
      style={[
        showIngredients ? styles.simpleBottomDetail : styles.bottomDetail,
        styles.content,
      ]}
    >
      <Text style={styles.sandwichName}>{sandwich.name}</Text>
      <TouchableOpacity style={styles.showMore} onPress={onToggleShow}>
        <Ionicon name="md-information-circle" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
    { showIngredients
      && (
      <View style={styles.ingrendientsList}>
        {
          isEmpty(sandwich.ingredients)
            ? (
              <View key="no-ingredients" style={styles.ingredientContainer}>
                <Ionicon name="md-checkmark" size={20} color="#FFF" style={styles.ingredientIcon} />
                <Text style={styles.ingredientName}>Nenhum ingrediente pré-selecionados</Text>
              </View>
            )
            : sandwich.ingredients.map(ingredient => (
              <View key={ingredient.id} style={styles.ingredientContainer}>
                <Ionicon name="md-checkmark" size={20} color="#FFF" style={styles.ingredientIcon} />
                <Text style={styles.ingredientName}>{ingredient.name}</Text>
              </View>
            ))
        }
      </View>
      )
    }
  </TouchableOpacity>
);

SandwichCard.propTypes = {
  sandwich: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
  }).isRequired,
  showIngredients: PropTypes.bool.isRequired,
  onChooseSandwich: PropTypes.func.isRequired,
  onToggleShow: PropTypes.func.isRequired,
};

export default enhance(SandwichCard);
