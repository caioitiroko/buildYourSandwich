import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  compose,
  pure,
  withProps,
} from "recompose";

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
);

const StaticFooter = ({ bill, onBack }) => (
  <View style={styles.container}>
    <Text style={styles.bill}>{`Total: R$ ${bill}`}</Text>
  </View>
);

StaticFooter.propTypes = {
};

export default enhance(StaticFooter);
