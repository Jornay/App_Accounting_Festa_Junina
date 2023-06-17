import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Button from '../components/ButtonHomeScreen';
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
    Home: undefined;
  };

  
const SplashScreen = () => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('Home');
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to my app</Text>
            <Button onPress={handleButtonPress} title="Go to the Central Page"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding: 20,
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginBottom:20,
    }
})

export default SplashScreen