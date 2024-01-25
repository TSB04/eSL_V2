import React, { useState } from 'react';
import { View , Button, StyleSheet } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import Logo from '../assets/logo.png';

const FormComponent = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInscription = () => {
    handleSubmit({ name, email, password });
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <PaperInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <PaperInput
        label="Lastname"
        value={lastname}
        onChangeText={(text) => setLastname(text)}
        style={styles.input}
      />
      <PaperInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <PaperInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <Button title="Inscription" onPress={handleInscription} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
    width: '100%',
  },
});

export default FormComponent;
