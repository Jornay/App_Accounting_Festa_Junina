import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface ButtonProps {
    onPress: () => void;
    title: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Button