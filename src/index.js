import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/login.screen";
import HomeScreen from "./screens/home.screen";
import SignInScreen from "./screens/signin.screen"


const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default Layout
