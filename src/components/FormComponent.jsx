// FormComponent.js
import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native-paper";

const FormComponent = ({ fields, onSubmit, submitButtonLabel }) => {
  const [formData, setFormData] = useState({});

  const handleFieldChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <View style={styles.container}>
      {fields.map((field, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={field.placeholder}
          onChangeText={(text) => handleFieldChange(field.name, text)}
          value={formData[field.name] || ""}
          keyboardType={field.keyboardType}
          secureTextEntry={field.secureTextEntry}
        />
      ))}
      <Button icon="login" mode="contained" onPress={handleSubmit}>
        {submitButtonLabel}
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
