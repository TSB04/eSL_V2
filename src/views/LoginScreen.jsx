import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigation();

  const handleLogin = () => {
    navigator.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/favicon.png")} />
      <TextInput
        label="Email"
        placeholder="Your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        placeholder="Your password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        <Text>Submit</Text>
      </Button>
      <Button
        mode="outlined"
        // onPress={handleSubscription}
        style={styles.button}
      >
        <Text>Wait, you don't have an account? Come here</Text>
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
