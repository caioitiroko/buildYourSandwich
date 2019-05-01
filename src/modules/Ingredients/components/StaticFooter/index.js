import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  branch,
  compose,
  pure,
  renderNothing,
  withProps,
} from "recompose";

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "ramda";
import { getBill, getDiscounts } from "../../services";
import { getIngredientsSelected } from "../../selectors";
import DiscountList from "../DiscountList";
import styles from "./style";
import Ionicon from "react-native-vector-icons/Ionicons";

const enhance = compose(
  pure,
  connect(state => ({
    ingredientsSelected: getIngredientsSelected(state),
  })),
  withProps(({ ingredientsSelected }) => ({
    bill: getBill(ingredientsSelected),
    discounts: getDiscounts(ingredientsSelected),
  })),
  branch(({ ingredientsSelected }) => isEmpty(ingredientsSelected), renderNothing),
  branch(({ bill }) => bill === 0, renderNothing),
);

const StaticFooter = ({ bill, discounts, onShowDiscountModal }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.total}>TOTAL</Text>
      <TouchableOpacity onPress={onShowDiscountModal} style={styles.backButtom}>
        <Ionicon name="md-information-circle-outline" size={24} color="#444" />
      </TouchableOpacity>
    </View>
    <Text style={styles.bill}>{`R$ ${bill.toFixed(2)}`}</Text>
    <DiscountList discounts={discounts} />
  </View>
);

StaticFooter.propTypes = {
  bill: PropTypes.number.isRequired,
  discounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShowDiscountModal: PropTypes.func.isRequired,
};

export default enhance(StaticFooter);
