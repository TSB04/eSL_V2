// HomeScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UserList from "../components/ListComponent";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
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
