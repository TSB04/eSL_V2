import React from "react";
import { View, StyleSheet } from "react-native";
import FormComponent from "../components/FormComponent";
import userservice from "../services/userservice";
import { useAuthorization } from "../utilis/AuthProvider";

const SignUpScreen = () => {
  const { signIn } = useAuthorization();

  const handleSignUp = (data) => {
    // Handle sign-up logic here
    console.log("Signing up with:", data);
    userservice
      .signUp(data)
      .then((response) => {
        console.log("response", response);
        if (response.status === 201) {
          const token = response.data._id;
          signIn(token);
        } else {
          console.log("response", response);
        }
      })
      .catch((error) => {
        console.log("KO", error);
      });
  };

  const formFields = [
    {
      name: "firstName",
      label: "First Name",
      keyboardType: "text",
      autoCapitalize: "none",
    },
    {
      name: "lastName",
      label: "Last Name",
      keyboardType: "text",
      autoCapitalize: "none",
    },
    {
      name: "email",
      label: "Email",
      keyboardType: "email-address",
      autoCapitalize: "none",
    },
    {
      name: "password",
      label: "Password",
      secureTextEntry: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FormComponent
        fields={formFields}
        onSubmit={handleSignUp}
        submitButtonLabel="Sign Up"
      />
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
});

export default SignUpScreen;
