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
    width: 200,
  },
  sandwichName: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 }
  }
});
