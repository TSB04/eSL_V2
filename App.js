import * as React from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Layout from "./src/index";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#362511",
    secondary: "#352315",
  },
};

export default function Main() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Layout />
      </PaperProvider>
    </NavigationContainer>
  );
}
