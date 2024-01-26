import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginView from './loginView';


const Stack = createNativeStackNavigator();

const HomeView = () => {
    return (
            <View style={styles.container}>
                <Text style={styles.text}> hello to Hompe View</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center', // or 'left' or 'right'
      lineHeight: 30, // Adjust the line height as needed
    },
  });
export default HomeView;

