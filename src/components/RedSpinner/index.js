import {
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React from "react";
import styles from "./style";

const RedSpinner = () => (
  <SafeAreaView style={styles.container}>
    <ActivityIndicator size="large" color="#F00" />
  </SafeAreaView>
);

export default RedSpinner;
