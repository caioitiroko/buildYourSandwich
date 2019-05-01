import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { pure } from "recompose";
import PropTypes from "prop-types";
import styles from "./style";
import WoodBackground from "../../../images/wood.jpg";

const enhance = pure;

const Reloader = ({ onReload }) => (
  <ImageBackground source={WoodBackground} style={styles.background}>
    <SafeAreaView />
    <View style={styles.container}>
      <TouchableOpacity onPress={onReload} activeOpacity={0.8} style={styles.button}>
        <Text style={styles.title}>Recarregar</Text>
      </TouchableOpacity>
    </View>
    <SafeAreaView />
  </ImageBackground>
);

Reloader.propTypes = {
  onReload: PropTypes.func.isRequired,
};

export default enhance(Reloader);
