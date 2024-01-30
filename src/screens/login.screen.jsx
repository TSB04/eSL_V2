import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import FormComponent from "../components/FormComponent";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigator = useNavigation();

  const inputs = [
    {
      name: "email",
      placeholder: "Email",
      value: "",
      keyboardType:"email-address"
    },
    {
      name: "password",
      placeholder: "Password",
      value: "",
      keyboardType:"password"
    }
  ]

  const handlePress = () => {
    navigator.navigate("HomeScreen");
  };

  const handleSubmit = (e) => {
    console.log("es", e)
  }

  const handleChange =(e) => {
    console.log("target", e)
  }

  return (
    <View style={styles.container}>
      <FormComponent inputs={inputs} handleSubmit={handleSubmit} onChange={handleChange} submitButton= "Login"/>
      <Button onPress={handlePress}>
        <Text>Don't have an account yet ? Sign Up</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});

export default LoginScreen;
