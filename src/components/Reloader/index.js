import {
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";
import { pure } from "recompose";
import PropTypes from "prop-types";
import styles from "./style";

const enhance = pure;

const Reloader = ({ onReload }) => (
  <SafeAreaView style={styles.container}>
    <Button
      onPress={onReload}
      title="Reload"
      color="#F00"
      accessibilityLabel="Reload"
    />
  </SafeAreaView>
);

Reloader.propTypes = {
  onReload: PropTypes.func.isRequired,
};

export default enhance(Reloader);
