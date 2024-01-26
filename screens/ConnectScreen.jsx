import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ConnectScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('DashboardScreen');
    };

    const handleSubscription = () => {
        navigation.navigate('SubscribeScreen');
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/favicon.png')}
            />
            <TextInput style={styles.inputs} label="Email" placeholder="Your email" />
            <TextInput style={styles.inputs} label="Password" placeholder="Your password" />
            <Button style={styles.btn} onPress={handleLogin}>
                <Text style={styles.txtBtn}>Submit</Text>
            </Button>
            <Button style={styles.btn} onPress={handleSubscription}>
                <Text style={styles.txtBtn}>Wait, you don't have an account ? Here come here</Text>
            </Button>
        </View>
    );
};

export default ConnectScreen;