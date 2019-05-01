import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  container: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 6,
    width: "80%",
    flex: 1,
    marginVertical: 10,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    alignSelf: "center",
    color: "#444",
    fontSize: 20,
    fontWeight: "bold",
  },
});
