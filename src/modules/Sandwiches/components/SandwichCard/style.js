import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F44336",
    borderRadius: 6,
    borderColor: "#C1342A",
    marginVertical: 10,
    width: 200,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  sandwichName: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomDetail: {
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 6,
    borderBottomWidth: 4,
    borderColor: "#C1342A",
    width: "100%",
  },
  simpleBottomDetail: {
    backgroundColor: "rgba(0,0,0,0)",
    borderBottomWidth: 4,
    borderColor: "#C1342A",
    width: "100%",
  },
  showMore: {
    padding: 10,
    paddingRight: 20,
  },
  ingrendientsList: {
    flex: 1,
    padding: 5,
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 6,
    borderBottomWidth: 4,
    borderColor: "#C1342A",
    width: "100%",
  },
  ingredientContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  ingredientIcon: {
    marginHorizontal: 5,
  },
  ingredientName: {
    flexShrink: 1,
    fontSize: 14,
    color: "#FFF",
    fontWeight: "bold",
  },
  discreetShadow: {
    textShadowColor: "#000",
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
  },
});
