import PropTypes from "prop-types";
import React from "react";
import styles from "./style";
import { pure } from "recompose";
import Modal from "react-native-modal";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const enhance = pure;

const DiscountListModal = ({ isVisible, onToggle }) => (
  <Modal
    isVisible={isVisible}
    onBackdropPress={onToggle}
  >
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Promoções</Text>
          <TouchableOpacity onPress={onToggle} style={styles.closeButton}>
            <Ionicon name="md-close" size={26} color="#F44336" />
          </TouchableOpacity>
        </View>
        <View style={styles.discountContainer}>
          <Text style={styles.discountTitle}>Light</Text>
          <Text style={styles.discountDescription}>
            Se o lanche tem alface e não tem bacon, ganha 10% de desconto.
          </Text>
        </View>
        <View style={styles.discountContainer}>
          <Text style={styles.discountTitle}>Muita carne</Text>
          <Text style={styles.discountDescription}>
            A cada 3 porções de carne o cliente só paga 2.
            Se o lanche tiver 6 porções, o cliente pagará 4.
            Assim por diante...
          </Text>
        </View>
        <View style={styles.discountContainer}>
          <Text style={styles.discountTitle}>Muito queijo</Text>
          <Text style={styles.discountDescription}>
            A cada 3 porções de queijo o cliente só paga 2.
            Se o lanche tiver 6 porções, o cliente pagará 4.
            Assim por diante...
          </Text>
        </View>
        </ScrollView>
    </View>
  </Modal>
);

DiscountListModal.propTypes = {
  isVisible: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

DiscountListModal.defaultProps = {
  isVisible: false,
}

export default enhance(DiscountListModal);
