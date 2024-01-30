import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/login.screen";
import HomeScreen from "./screens/home.screen";
import SignUpScreen from "./screens/signup.screen";
import ProfilScreen from "./screens/profil.screen";
import { useAuthorization } from "./utilis/AuthProvider"; // Import useAuthorization hook

const Stack = createNativeStackNavigator();

const Layout = () => {
  const { authToken } = useAuthorization(); // Access authToken from AuthProvider

  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      {authToken ? (
        <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Auth" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Layout;
