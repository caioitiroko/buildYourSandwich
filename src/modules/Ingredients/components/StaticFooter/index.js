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
import { getBill, getDiscounts } from "../../services";
import { getIngredientsSelected } from "../../selectors";
import DiscountList from "../DiscountList";
import styles from "./style";
import { COMMON_IDENTIFIERS } from "../../../../constants";
import { isEmpty } from "ramda";

const enhance = compose(
  pure,
  connect(state => ({
    ingredientsSelected: getIngredientsSelected(state),
  })),
  withProps(({ ingredientsSelected }) => ({
    bill: getBill(ingredientsSelected),
    discounts: getDiscounts(ingredientsSelected),
  })),
  branch(({ingredientsSelected}) => isEmpty(ingredientsSelected), renderNothing),
);

const StaticFooter = ({ bill, discounts }) => (
  <View style={styles.container}>
    <Text style={styles.bill}>{`Total: R$ ${bill}`}</Text>
    <DiscountList discounts={discounts} />
  </View>
);

StaticFooter.propTypes = {
  bill: PropTypes.number.isRequired,
  discounts: PropTypes.array.isRequired,
};

export default enhance(StaticFooter);
