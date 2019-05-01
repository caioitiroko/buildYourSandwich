import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F44336",
    borderRadius: 6,
    borderColor: "#C1342A",
    borderBottomWidth: 4,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 250,
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
});
