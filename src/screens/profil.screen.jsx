import React from "react";
import { View, Text, Button } from "react-native";
import { useAuthorization } from "../utilis/AuthProvider";
const ProfileScreen = () => {
  const { authToken, status, signOut } = useAuthorization(); // Access authentication data and functions from AuthContext

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Authentication Status: {status}</Text>
      <Text>Authentication Token: {authToken}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default ProfileScreen;
