import { View, ScrollView } from "react-native";
import { compose, pure } from "recompose";

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import IngredientCard from "../IngredientCard";
import { findItem } from "../../../../utils";
import { getIngredientsSelected } from "../../selectors";
import styles from "./style";

const enhance = compose(
  pure,
  connect(state => ({
    ingredientsSelected: getIngredientsSelected(state),
  })),
);

const IngredientList = ({
  ingredients, ingredientsSelected, onAddIngredient, onRemoveIngredient,
}) => (
  <ScrollView>
    <View style={styles.container}>
      {ingredients.map((ingredient) => {
        const ingredientSelected = findItem(ingredient.id, ingredientsSelected) || {};

        return (
          <IngredientCard
            key={ingredient.id}
            ingredient={ingredient}
            quantity={ingredientSelected.quantity}
            onAddIngredient={onAddIngredient}
            onRemoveIngredient={onRemoveIngredient}
          />
        );
      })}
    </View>
  </ScrollView>
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
