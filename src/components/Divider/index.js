import { View, ViewPropTypes } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import styles from "./style";

const Divider = ({ children, color, style }) => (
  <View style={[styles.divider, style]}>
    <View style={[styles.line, { backgroundColor: color }]} />
    {children && (
      <View style={[styles.children, { borderColor: color }]}>
        {children}
      </View>
    )}
    <View style={[styles.line, { backgroundColor: color }]} />
  </View>
);

Divider.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  style: ViewPropTypes.style,
};

Divider.defaultProps = {
  children: null,
  color: "#000",
  style: {},
};

export default Divider;
