import {
  Text,
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

const StaticFooter = ({ bill, discounts }) => (
  <View style={styles.container}>
    <Text style={styles.total}>TOTAL</Text>
    <Text style={styles.bill}>{`R$ ${bill.toFixed(2)}`}</Text>
    <DiscountList discounts={discounts} />
  </View>
);

StaticFooter.propTypes = {
  bill: PropTypes.number.isRequired,
  discounts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default enhance(StaticFooter);
