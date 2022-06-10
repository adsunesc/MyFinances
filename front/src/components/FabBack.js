import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';

const FabBack = ({ navigation }) => (
    <IconButton
        style={style.buttonBack} 
        icon="backburger"
        color={Colors.red500}
        size={60}
        onPress={() => {
            navigation.goBack();
        }} 
    />
);

const style = StyleSheet.create({
    buttonBack:{
        position: 'absolute',
        margin: 6,
        left: 20,
        top: 1
    },
})

export default FabBack;