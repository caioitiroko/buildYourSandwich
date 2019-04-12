import {
  Text,
  View,
} from "react-native";
import { compose, pure } from "recompose";

import IngredientCard from "../IngredientCard";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { findItem } from "../../../../utils";
import { getIngredientsSelected } from "../../selectors";
import styles from "./style";

const enhance = compose(
  pure,
  connect(state => ({
    ingredientsSelected: getIngredientsSelected(state),
  })),
);

const IngredientList = ({ ingredients, ingredientsSelected, onAddIngredient, onRemoveIngredient }) => (
  <View style={styles.container}>
    {ingredients.map(ingredient => {
      const { quantity = 0 } = findItem(ingredient.id, ingredientsSelected) || {};

      return (
        <IngredientCard
          key={ingredient.id}
          ingredient={ingredient}
          quantity={quantity}
          onAddIngredient={onAddIngredient}
          onRemoveIngredient={onRemoveIngredient}
        />
      )
    })}
  </View>
);

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
  ingredientsSelected: PropTypes.arrayOf(PropTypes.object),
  onAddIngredient: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
};

IngredientList.defaultProps = {
  ingredients: [],
  ingredientsSelected: [],
};

export default enhance(IngredientList);
