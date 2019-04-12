import { Alert } from "react-native";

export const warnUser = message => Alert.alert(
  "Erro",
  message,
  [
    { text: "OK" },
  ],
  { cancelable: false },
);
