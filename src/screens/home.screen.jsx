import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import UserList from "../components/ListComponent";
import { useAuthorization } from "../utilis/AuthProvider";


const HomeScreen = () => {
  const { signOut } = useAuthorization(); 
  
  return (
    <>
      <View style={styles.container}>
      <Button title="Sign Out" onPress={signOut} />
        <Text style={styles.text}>Welcome to the home page!</Text>
      </View>
      <View>
        <UserList />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    lineHeight: 30,
  },
});

export default HomeScreen;
