import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  branch,
  compose,
  pure,
  renderComponent,
  withState,
  withHandlers,
} from "recompose";

import DiscountListModal from "../../components/DiscountListModal";
import { Actions } from "react-native-router-flux";
import PropTypes from "prop-types";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { connect } from "react-redux";
import lifecycle from "react-pure-lifecycle";
import { prop } from "ramda";
import StaticFooter from "../../components/StaticFooter";
import RedSpinner from "../../../../components/RedSpinner";
import Divider from "../../../../components/Divider";
import IngredientList from "../../components/IngredientList";
import { getError, getIngredients, isLoading } from "../../selectors";
import { addIngredient, removeIngredient, requestIngredients } from "../../../../actions";
import styles from "./style";
import { isNotNil } from "../../../../utils";
import Reloader from "../../../../components/Reloader";
import WoodBackground from "../../../../../images/wood.jpg";

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
  withState("showDiscountModal", "setShowDiscountModal", false),
  withHandlers({
    onAddIngredient: ({ onAddIngredient }) => ingredient => onAddIngredient(ingredient),
    onBack: () => () => Actions.pop(),
    onRemoveIngredient: ({ onRemoveIngredient }) => ingredient => onRemoveIngredient(ingredient),
    onToggleDiscountModal:
      ({ showDiscountModal, setShowDiscountModal }) => () =>
        setShowDiscountModal(!showDiscountModal),
  }),
  lifecycle({
    componentDidMount: ({ onRequestIngredients }) => onRequestIngredients(),
  }),
  branch(
    prop("isLoading"),
    renderComponent(() => <RedSpinner />)
  ),
  branch(
    ({ error }) => isNotNil(error),
    renderComponent(({ onRequestIngredients }) => <Reloader onReload={onRequestIngredients} />)
  )
);

const ChooseIngredients = ({
  ingredients,
  onAddIngredient,
  onBack,
  onRemoveIngredient,
  onToggleDiscountModal,
  showDiscountModal,
}) => (
  <ImageBackground source={WoodBackground} style={styles.background}>
    <SafeAreaView />
    <DiscountListModal isVisible={showDiscountModal} onToggle={onToggleDiscountModal} />
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButtom}>
        <MaterialCommunityIcon name="chevron-left" size={50} color="#000" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Divider color="#666" style={styles.divider}>
          <MaterialCommunityIcon name="food-variant" size={30} color="#666" />
        </Divider>
        <Text style={styles.title}>Incremente seu lanche</Text>
      </View>
      <IngredientList
        ingredients={ingredients}
        onAddIngredient={onAddIngredient}
        onRemoveIngredient={onRemoveIngredient}
      />
      <StaticFooter onShowDiscountModal={onToggleDiscountModal}/>
    </View>
    <SafeAreaView />
  </ImageBackground>
);

ChooseIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
  onAddIngredient: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
  onToggleDiscountModal: PropTypes.func.isRequired,
};

ChooseIngredients.defaultProps = {
  ingredients: [],
};

export default enhance(ChooseIngredients);
