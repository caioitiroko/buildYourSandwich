import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  backButtom: {
    position: "absolute",
    top: -16,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 50,
    width: 54,
    height: 54,
    zIndex: 1,
    left: -20,
  },
  container: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 6,
    width: "80%",
    flex: 1,
    marginVertical: 26,
    paddingTop: 20,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    alignSelf: "center",
    color: "#444",
    fontSize: 20,
    fontWeight: "bold",
  },
});
