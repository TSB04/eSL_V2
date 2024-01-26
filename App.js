import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeView from './views/HomeView';

export default function App() {
  console.log("App Component Rendered");

  return (
    <NavigationContainer>
      {console.log("Inside NavigationContainer")}
      <HomeView />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
