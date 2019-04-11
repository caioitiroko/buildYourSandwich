import {
  SafeAreaView,
  ScrollView,
} from "react-native";
import { addIngredient, removeIngredient, requestIngredients } from "../../../../actions";
import {
  branch,
  compose,
  pure,
  renderComponent,
  withHandlers,
} from "recompose";
import { getError, getIngredients, isLoading } from "../../selectors";

import IngredientList from "../../components/IngredientList";
import PropTypes from "prop-types";
import React from "react";
import RedSpinner from "../../components/RedSpinner";
import { connect } from "react-redux";
import lifecycle from "react-pure-lifecycle";
import { prop } from "ramda";
import styles from "./style";

const enhance = compose(
  pure,
  connect(
    state => ({
      ingredients: getIngredients(state),
      isLoading: isLoading(state),
      error: getError(state),
    }),
    dispatch => ({
      onRequestIngredients: () => dispatch(requestIngredients()),
      onAddIngredient: ingredient => dispatch(addIngredient(ingredient)),
      onRemoveIngredient: ingredient => dispatch(removeIngredient(ingredient)),
    })
  ),
  withHandlers({
    onAddIngredient: ({ onAddIngredient }) => ingredient => onAddIngredient(ingredient),
    onRemoveIngredient: ({ onRemoveIngredient }) => ingredient => onRemoveIngredient(ingredient),
  }),
  lifecycle({
    componentDidMount: ({ onRequestIngredients }) => onRequestIngredients(),
  }),
  branch(
    prop("isLoading"),
    renderComponent(() => <RedSpinner />)
  ),
);

const ChooseIngredients = ({ onAddIngredient, onRemoveIngredient, ingredients }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <IngredientList
        ingredients={ingredients}
        onAddIngredient={onAddIngredient}
        onRemoveIngredient={onRemoveIngredient}
      />
    </ScrollView>
  </SafeAreaView>
);

ChooseIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
  onAddIngredient: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
};

ChooseIngredients.defaultProps = {
  ingredients: [],
};

export default enhance(ChooseIngredients);
