import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F44336",
    borderRadius: 6,
    marginVertical: 10,
    width: 250,
  },
  bottomDetail: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    borderBottomWidth: 4,
    borderColor: "#C1342A",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  ingredientInfo: {
    flex: 6,
  },
  ingredientName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF",
    marginBottom: 5,
  },
  ingredientPrice: {
    fontSize: 16,
    color: "#FFF",
  },
  ingredientPriceIcon: {
    marginRight: 5,
  },
  ingredientPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  ingredientQuantity: {
    marginVertical: 6,
    fontSize: 14,
    color: "#FFF",
  },
  discreetShadow: {
    textShadowColor: "#000",
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
  },
});
