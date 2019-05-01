import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopWidth: 1,
    borderColor: "#000",
    padding: 20,
  },
  bill: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
  },
  total: {
    color: "#444",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
});
