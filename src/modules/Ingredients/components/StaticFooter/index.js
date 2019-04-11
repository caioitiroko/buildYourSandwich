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
  withProps,
} from "recompose";

import { Actions } from "react-native-router-flux";
import ArrowLeft from "../../../../../images/simple-arrow-left.png"
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { getBill } from "../../services";
import { getIngredientsSelected } from "../../selectors";
import styles from "./style";

const enhance = compose(
  pure,
  connect(state => ({
    ingredientsSelected: getIngredientsSelected(state),
  })),
  withProps(({ ingredientsSelected }) => ({
    bill: getBill(ingredientsSelected),
  })),
  withHandlers({
    onBack: () => () => Actions.chooseSandwich(),
  })
);

const StaticFooter = ({ bill, onBack }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onBack} style={styles.backButtom}>
      <Image source={ArrowLeft} />
    </TouchableOpacity>
    <Text style={styles.bill}>{`Total: R$ ${bill}`}</Text>
  </View>
);

StaticFooter.propTypes = {
};

export default enhance(StaticFooter);
