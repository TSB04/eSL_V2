import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ConnectScreen from './ConnectScreen';
import SubscribeScreen from './SubscribeScreen';
import DashboardScreen from './DashoardScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {

    return (
        <Stack.Navigator initialRouteName="ConnectScreen">
            <Stack.Screen name="ConnectScreen" component={ConnectScreen} />
            <Stack.Screen name="SubscribeScreen" component={SubscribeScreen} />
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
            <View>
                <Text>hello to HomeScreen</Text>
            </View>
        </Stack.Navigator>
    );
};

export default HomeScreen

const styles = StyleSheet.create({})