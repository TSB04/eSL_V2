import React from "react";
import { View, StyleSheet, Button } from "react-native";
import FormComponent from "../components/FormComponent";
import { useNavigation } from "@react-navigation/native";
import { useAuthorization } from "../utilis/AuthProvider";
import userservice from "../services/userservice";

const LoginScreen = () => {
  const navigator = useNavigation();
  const { signIn } = useAuthorization();

  const handlePress = () => {
    navigator.navigate("SignUpScreen");
  };

  const handleSubmit = async (data) => {
    await userservice
      .logIn(data)
      .then((response) => {
        console.log("response", response);
        if (response.status === 201) {
          const token = response.data.id;
          signIn(token);
        } else {
          console.log("response", response);
        }
      })
      .catch((error) => {
        console.log("KO", error);
      });
  };

  return (
    <View style={styles.container}>
      <FormComponent
        fields={[
          {
            name: "email",
            placeholder: "Email",
          },
          {
            name: "password",
            placeholder: "Password",
            secureTextEntry: true,
          },
        ]}
        onSubmit={handleSubmit}
        submitButtonLabel="Login"
      />
      <Button title="Don't have an account yet? Sign Up" onPress={handlePress}/>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
