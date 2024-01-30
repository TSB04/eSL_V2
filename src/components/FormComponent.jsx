import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";

const FormComponent = ({ inputs, handleSubmit, onChange, submitButton }) => {
  return (
    <View style={styles.container}>
      {inputs?.map((input, index) => (
        <TextInput
          key={index}
          style={styles.input}
          name={input.name}
          placeholder={input.placeholder}
          onChangeText={(text) => onChange(input.name, text)}
          value={input.value}
          keyboardType={input.keyboardType}
        />
      ))}

      <Button title={submitButton} onPress={handleSubmit}></Button>
      <Button
        icon="login"
        mode="contained"
      >
        Login
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
  input: {
    width: "80%",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
});

export default FormComponent;
