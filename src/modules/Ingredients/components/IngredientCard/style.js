import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F33",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: 300,
  },
  ingredientInfo: {
    flex: 1,
  },
  ingredientName: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
  },
  ingredientPrice: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
  },
  ingredientQuantity: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: "center",
  },
});
