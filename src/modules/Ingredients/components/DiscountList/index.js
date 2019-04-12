import {
  Text,
  View,
} from "react-native";
import {
  pure,
  withProps,
  compose,
} from "recompose";
import {
  filter,
  prop,
} from "ramda";

import PropTypes from "prop-types";
import React from "react";
import styles from "./style";

const enhance = compose(
  pure,
  withProps(({ discounts }) => ({
    discounts: filter(prop('active'), discounts),
  }))
);

const discountQuantity = quantity => quantity ? `${quantity}X` : "";
const discountText = ({ quantity, name}) => `${discountQuantity(quantity)} ${name}`;

const DiscountList = ({ discounts }) => (
  <View style={styles.container}>
    {discounts.map(discount => (
      <Text key={discount.name} style={styles.discount}>{discountText(discount)}</Text>
    ))}
  </View>
);

DiscountList.propTypes = {
  discounts: PropTypes.array.isRequired,
};

export default enhance(DiscountList);
