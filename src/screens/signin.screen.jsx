import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import FormComponent from "../components/FormComponent";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log("Signing in with:", email, password);
  };

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Sign In</Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Email"
    //     onChangeText={setEmail}
    //     value={email}
    //     autoCapitalize="none"
    //     keyboardType="email-address"
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Password"
    //     onChangeText={setPassword}
    //     value={password}
    //     secureTextEntry
    //   />
    //   <TouchableOpacity style={styles.button} onPress={handleSignIn}>
    //     <Text style={styles.buttonText}>Sign In</Text>
    //   </TouchableOpacity>
    // </View>
    <View>
      <FormComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignInScreen;
