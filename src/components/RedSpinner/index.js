import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  View,
} from "react-native";
import React from "react";
import styles from "./style";
import WoodBackground from "../../../images/wood.jpg";

const RedSpinner = () => (
  <ImageBackground source={WoodBackground} style={styles.background}>
    <SafeAreaView />
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#F00" />
    </View>
    <SafeAreaView />
  </ImageBackground>
);

export default RedSpinner;
