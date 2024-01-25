import React from 'react';
import { View } from 'react-native';
import { Button as ButtonPaper } from 'react-native-paper';

const ButtonComponent = ({ label, onPress, mode = 'contained', color = '#007AFF', disabled = false }) => {
  return (
    <View>
        <ButtonPaper
            mode={mode}
            onPress={onPress}
            color={color}
            disabled={disabled}
        >
            {label}
        </ButtonPaper>
    </View>
  );
};

export default ButtonComponent;