import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TextInput, ProgressBar, Button } from 'react-native-paper';
import FormComponent from '../components/FormComponent';

const SubscribeScreen = () => {
    
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSub = () => {
        setIsLoading(true);
        const intervalId = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress < 1) {
                    return prevProgress + 0.1;
                } else {
                    setIsLoading(false);
                    clearInterval(intervalId);
                    navigation.navigate('DashboardScreen');
                }
            });
        }, 1000);
    };

    return (
        <View style={{ flex: 1 }}>
            <FormComponent handleSubmit={handleSub}/>
            {isLoading && <View><Text>Loading</Text><ProgressBar progress={progress} color="#3498db" /></View>}
        </View>
    )
}

export default SubscribeScreen